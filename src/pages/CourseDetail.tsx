import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useCourse, useCourseSections, useEnrollment, useEnroll, useLessonProgress } from "@/hooks/useCourses";
import { useAuth } from "@/hooks/useAuth";
import { Clock, Users, Star, BookOpen, ArrowLeft, CheckCircle2, Lock, Play, Crown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useMemo } from "react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data: course, isLoading } = useCourse(id);
  const { data: sections } = useCourseSections(id);
  const { data: enrollment } = useEnrollment(id);
  const { data: progress } = useLessonProgress(id);
  const enrollMutation = useEnroll();

  const isEnrolled = !!enrollment;

  const totalLessons = useMemo(() => sections?.reduce((acc, s) => acc + s.lessons.length, 0) ?? 0, [sections]);
  const completedLessons = useMemo(() => progress?.filter(p => p.completed).length ?? 0, [progress]);
  const progressPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const handleEnroll = () => {
    if (!user) { navigate("/login"); return; }
    enrollMutation.mutate(id!);
  };

  const enrollmentBadge = course?.enrollment_type === "free"
    ? { label: "Free", className: "bg-studyfy-success/10 text-studyfy-success border-studyfy-success/20" }
    : course?.enrollment_type === "trial"
      ? { label: "Trial", className: "bg-studyfy-warning/10 text-studyfy-warning border-studyfy-warning/20" }
      : { label: "Premium", className: "bg-accent/10 text-accent border-accent/20" };

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-20">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-48 w-full" />
        </div>
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">{t("course_not_found")}</h1>
          <Button asChild><Link to="/courses">{t("back_to_courses")}</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-hero">
        <div className="container py-12 md:py-16">
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> {t("all_courses")}
          </Link>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-primary-foreground/80 border-primary-foreground/20">{course.subject}</Badge>
                <Badge variant="outline" className={enrollmentBadge.className}>
                  {course.enrollment_type === "paid" && <Crown className="h-3 w-3 mr-1" />}
                  {enrollmentBadge.label}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight">{course.title}</h1>
              <p className="mt-4 text-primary-foreground/70 leading-relaxed">{course.description}</p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{course.students_count.toLocaleString()} {t("course_students")}</span>
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-studyfy-warning text-studyfy-warning" />{Number(course.rating).toFixed(1)}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" />{course.level}</span>
              </div>
              {isEnrolled && (
                <div className="mt-6 bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-foreground/80">{t("dash_completion")}</span>
                    <span className="text-sm font-medium text-primary-foreground">{progressPct}%</span>
                  </div>
                  <Progress value={progressPct} className="h-2" />
                </div>
              )}
            </div>
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 shadow-elevated">
                {course.thumbnail && (
                  <img src={course.thumbnail} alt={course.title} className="w-full aspect-video rounded-lg object-cover mb-5" />
                )}
                <div className="text-3xl font-display font-bold text-card-foreground mb-1">
                  {course.enrollment_type === "free" ? "Free" : `$${Number(course.price).toFixed(2)}`}
                </div>
                <p className="text-sm text-muted-foreground mb-5">{t("course_onetime")}</p>
                {isEnrolled ? (
                  <Button variant="accent" className="w-full" size="lg" asChild>
                    <Link to={`/learn/${id}`}>
                      <Play className="h-4 w-4 mr-2" />
                      {progressPct > 0 ? t("dash_in_progress") : t("course_enroll")}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="accent"
                    className="w-full"
                    size="lg"
                    onClick={handleEnroll}
                    disabled={enrollMutation.isPending}
                  >
                    {t("course_enroll")}
                  </Button>
                )}
                <Button variant="outline" className="w-full mt-2">{t("course_wishlist")}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <div className="container py-12 md:py-16">
        <h2 className="text-xl font-display font-bold mb-6">{t("what_youll_learn")}</h2>
        {sections && sections.length > 0 ? (
          <div className="space-y-4">
            {sections.map((section, si) => (
              <div key={section.id} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-4 bg-muted/50 font-display font-semibold text-sm flex items-center gap-2">
                  <span className="text-muted-foreground">Section {si + 1}:</span> {section.title}
                  <span className="ml-auto text-xs text-muted-foreground">{section.lessons.length} lessons</span>
                </div>
                <div className="divide-y divide-border">
                  {section.lessons.map((lesson) => {
                    const canAccess = isEnrolled || lesson.is_preview;
                    const isCompleted = progress?.some(p => p.lesson_id === lesson.id && p.completed);
                    return (
                      <div key={lesson.id} className="px-5 py-3 flex items-center gap-3 text-sm">
                        {isCompleted ? (
                          <CheckCircle2 className="h-4 w-4 text-studyfy-success shrink-0" />
                        ) : canAccess ? (
                          <Play className="h-4 w-4 text-accent shrink-0" />
                        ) : (
                          <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                        )}
                        <span className={canAccess ? "text-foreground" : "text-muted-foreground"}>
                          {lesson.title}
                        </span>
                        {lesson.is_preview && !isEnrolled && (
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0 ml-1">Preview</Badge>
                        )}
                        <span className="ml-auto text-xs text-muted-foreground">{lesson.duration_minutes}m</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 gap-3">
            {[t("highlight_1"), t("highlight_2"), t("highlight_3"), t("highlight_4"), t("highlight_5")].map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default CourseDetail;
