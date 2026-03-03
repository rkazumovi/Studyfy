import { useParams, Link, useSearchParams } from "react-router-dom";
import { useCourse, useCourseSections, useEnrollment, useLessonProgress, useToggleLessonComplete } from "@/hooks/useCourses";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, ArrowLeft, ChevronRight, Play, Lock, CheckCircle2, Menu, X } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Learn = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();
  const { t } = useLanguage();
  const { data: course, isLoading: courseLoading } = useCourse(id);
  const { data: sections, isLoading: sectionsLoading } = useCourseSections(id);
  const { data: enrollment, isLoading: enrollLoading } = useEnrollment(id);
  const { data: progress } = useLessonProgress(id);
  const toggleComplete = useToggleLessonComplete();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const allLessons = useMemo(() => sections?.flatMap(s => s.lessons) ?? [], [sections]);
  const activeLessonId = searchParams.get("lesson") || allLessons[0]?.id;
  const activeLesson = allLessons.find(l => l.id === activeLessonId);

  const completedLessons = useMemo(() => progress?.filter(p => p.completed).length ?? 0, [progress]);
  const progressPct = allLessons.length > 0 ? Math.round((completedLessons / allLessons.length) * 100) : 0;
  const isLessonCompleted = (lessonId: string) => progress?.some(p => p.lesson_id === lessonId && p.completed) ?? false;

  const currentIndex = allLessons.findIndex(l => l.id === activeLessonId);
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;

  // Auto-select first incomplete lesson on load
  useEffect(() => {
    if (!searchParams.get("lesson") && allLessons.length > 0 && progress) {
      const firstIncomplete = allLessons.find(l => !isLessonCompleted(l.id));
      if (firstIncomplete) {
        setSearchParams({ lesson: firstIncomplete.id }, { replace: true });
      }
    }
  }, [allLessons.length, progress]);

  if (courseLoading || sectionsLoading || enrollLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
      </div>
    );
  }

  if (!enrollment && !enrollLoading) {
    return <Navigate to={`/courses/${id}`} replace />;
  }

  const navigateLesson = (lessonId: string) => {
    setSearchParams({ lesson: lessonId });
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="h-14 border-b border-border bg-card flex items-center px-4 gap-3 shrink-0 z-20">
        <button className="lg:hidden p-1.5 text-muted-foreground hover:text-foreground" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to={`/courses/${id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">{course?.title}</span>
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{progressPct}%</span>
          <Progress value={progressPct} className="w-24 h-2" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:relative z-10 lg:z-auto w-80 h-[calc(100vh-3.5rem)] bg-card border-r border-border overflow-y-auto transition-transform duration-200 shrink-0`}>
          <div className="p-4">
            <h2 className="font-display font-semibold text-sm mb-3">{t("dash_my_courses")}</h2>
            {sections?.map((section, si) => (
              <div key={section.id} className="mb-4">
                <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                  Section {si + 1}: {section.title}
                </div>
                {section.lessons.map((lesson) => {
                  const completed = isLessonCompleted(lesson.id);
                  const active = lesson.id === activeLessonId;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => navigateLesson(lesson.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors mb-0.5 ${
                        active ? "bg-accent/10 text-accent font-medium" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {completed ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-studyfy-success shrink-0" />
                      ) : (
                        <Play className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      )}
                      <span className="truncate">{lesson.title}</span>
                      <span className="ml-auto text-[10px] text-muted-foreground shrink-0">{lesson.duration_minutes}m</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-background/50 z-[5] lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {activeLesson ? (
            <div className="max-w-3xl mx-auto px-6 py-8">
              {/* Video placeholder */}
              <div className="aspect-video bg-muted rounded-xl mb-8 flex items-center justify-center border border-border">
                <div className="text-center">
                  <Play className="h-12 w-12 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Video content coming soon</p>
                </div>
              </div>

              <h1 className="text-2xl font-display font-bold mb-4">{activeLesson.title}</h1>
              <div className="text-sm text-muted-foreground mb-6">{activeLesson.duration_minutes} min</div>

              {activeLesson.content && (
                <div className="prose prose-sm dark:prose-invert max-w-none mb-8">
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">{activeLesson.content}</p>
                </div>
              )}

              {/* Mark complete */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card mb-8">
                <Checkbox
                  id="complete"
                  checked={isLessonCompleted(activeLesson.id)}
                  onCheckedChange={(checked) => {
                    toggleComplete.mutate({ lessonId: activeLesson.id, completed: !!checked });
                  }}
                />
                <label htmlFor="complete" className="text-sm font-medium cursor-pointer">
                  Mark as completed
                </label>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                {prevLesson ? (
                  <Button variant="outline" size="sm" onClick={() => navigateLesson(prevLesson.id)}>
                    <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                  </Button>
                ) : <div />}
                {nextLesson ? (
                  <Button variant="accent" size="sm" onClick={() => navigateLesson(nextLesson.id)}>
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                ) : (
                  <Button variant="accent" size="sm" asChild>
                    <Link to="/dashboard">Back to Dashboard</Link>
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Select a lesson to begin
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Learn;
