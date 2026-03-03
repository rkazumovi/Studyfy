import Layout from "@/components/layout/Layout";
import { BookOpen, Clock, Award, TrendingUp, Sparkles, Play, ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useMyEnrollments, useLessonProgress, useUserRole } from "@/hooks/useCourses";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const Dashboard = () => {
  const { user, profile, trialDaysRemaining } = useAuth();
  const { t } = useLanguage();
  const { data: enrollments, isLoading: enrollLoading } = useMyEnrollments();
  const { data: roles } = useUserRole();
  const isInstructor = roles?.includes("instructor");

  const displayName = profile?.display_name || user?.email?.split("@")[0] || "";

  // Fetch progress for all enrolled courses
  const courseIds = useMemo(() => enrollments?.map(e => e.course_id) ?? [], [enrollments]);

  const { data: allProgress } = useQuery({
    queryKey: ["all-progress", user?.id, courseIds],
    enabled: !!user && courseIds.length > 0,
    queryFn: async () => {
      const { data: sections } = await supabase
        .from("course_sections")
        .select("id, course_id")
        .in("course_id", courseIds);
      if (!sections?.length) return { progressMap: {}, lessonCounts: {} };

      const { data: lessons } = await supabase
        .from("lessons")
        .select("id, section_id")
        .in("section_id", sections.map((s: any) => s.id));
      if (!lessons?.length) return { progressMap: {}, lessonCounts: {} };

      const { data: progress } = await supabase
        .from("lesson_progress")
        .select("*")
        .eq("user_id", user!.id)
        .in("lesson_id", lessons.map((l: any) => l.id));

      // Map section_id -> course_id
      const sectionCourseMap: Record<string, string> = {};
      sections.forEach((s: any) => { sectionCourseMap[s.id] = s.course_id; });

      // Map lesson_id -> course_id
      const lessonCourseMap: Record<string, string> = {};
      lessons.forEach((l: any) => { lessonCourseMap[l.id] = sectionCourseMap[l.section_id]; });

      // Count lessons per course
      const lessonCounts: Record<string, number> = {};
      lessons.forEach((l: any) => {
        const cid = lessonCourseMap[l.id];
        lessonCounts[cid] = (lessonCounts[cid] || 0) + 1;
      });

      // Count completed per course
      const progressMap: Record<string, number> = {};
      progress?.forEach((p: any) => {
        if (p.completed) {
          const cid = lessonCourseMap[p.lesson_id];
          if (cid) progressMap[cid] = (progressMap[cid] || 0) + 1;
        }
      });

      return { progressMap, lessonCounts };
    },
  });

  const totalEnrolled = enrollments?.length ?? 0;
  const totalCompleted = Object.values(allProgress?.progressMap ?? {}).reduce((a, b) => a + b, 0);
  const totalLessons = Object.values(allProgress?.lessonCounts ?? {}).reduce((a, b) => a + b, 0);
  const overallPct = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const dashboardCards = [
    { icon: BookOpen, label: t("dash_enrolled"), value: String(totalEnrolled), color: "text-accent" },
    { icon: Clock, label: t("dash_hours"), value: "0", color: "text-studyfy-info" },
    { icon: Award, label: t("dash_certificates"), value: "0", color: "text-studyfy-warning" },
    { icon: TrendingUp, label: t("dash_completion"), value: `${overallPct}%`, color: "text-studyfy-success" },
  ];

  return (
    <Layout hideFooter>
      <div className="container py-10">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            {t("dash_welcome")}, {displayName}!
          </h1>
          {isInstructor && (
            <Button variant="outline" size="sm" asChild>
              <Link to="/instructor">Instructor Dashboard <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          )}
        </div>
        <p className="text-muted-foreground mb-6">{t("dash_subtitle")}</p>

        {/* Trial banner */}
        {trialDaysRemaining !== null && trialDaysRemaining > 0 && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
            <Sparkles className="h-5 w-5 text-accent shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">{t("dash_trial_active")}</p>
              <p className="text-xs text-muted-foreground">
                {trialDaysRemaining} {t("dash_trial_days")}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {dashboardCards.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <Icon className={`h-5 w-5 ${color} mb-3`} />
              <div className="text-2xl font-display font-bold">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-display font-semibold mb-4">{t("dash_my_courses")}</h2>

        {enrollLoading ? (
          <div className="space-y-4">
            {[1, 2].map(i => <Skeleton key={i} className="h-24 w-full rounded-xl" />)}
          </div>
        ) : enrollments && enrollments.length > 0 ? (
          <div className="space-y-4">
            {enrollments.map(({ courses: course, course_id }) => {
              const completed = allProgress?.progressMap?.[course_id] ?? 0;
              const total = allProgress?.lessonCounts?.[course_id] ?? 0;
              const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
              return (
                <Link
                  key={course_id}
                  to={`/learn/${course_id}`}
                  className="flex items-center gap-5 rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elevated transition-all hover:-translate-y-0.5"
                >
                  <div className="w-20 h-14 rounded-lg bg-muted overflow-hidden shrink-0">
                    {course.thumbnail && <img src={course.thumbnail} alt="" className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-sm truncate">{course.title}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <Progress value={pct} className="flex-1 h-2" />
                      <span className="text-xs text-muted-foreground shrink-0">{pct}%</span>
                    </div>
                  </div>
                  <Button variant="accent" size="sm" className="shrink-0">
                    <Play className="h-4 w-4 mr-1" />
                    {pct > 0 ? "Continue" : "Start"}
                  </Button>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
            <BookOpen className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground mb-4">{t("dash_no_courses")}</p>
            <Button variant="accent" asChild>
              <Link to="/courses">{t("dash_browse")}</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
