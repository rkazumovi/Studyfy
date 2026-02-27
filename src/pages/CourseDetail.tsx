import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleCourses } from "@/data/courses";
import { Clock, Users, Star, BookOpen, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const course = sampleCourses.find((c) => c.id === id);

  const highlights = [
    t("highlight_1"),
    t("highlight_2"),
    t("highlight_3"),
    t("highlight_4"),
    t("highlight_5"),
  ];

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
              <Badge variant="outline" className="mb-3 text-primary-foreground/80 border-primary-foreground/20">{course.subject}</Badge>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight">{course.title}</h1>
              <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                {t("course_description")}
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{course.students.toLocaleString()} {t("course_students")}</span>
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-studyfy-warning text-studyfy-warning" />{course.rating}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" />{course.level}</span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 shadow-elevated">
                <img src={course.image} alt={course.title} className="w-full aspect-video rounded-lg object-cover mb-5" />
                <div className="text-3xl font-display font-bold text-card-foreground mb-1">{course.price}</div>
                <p className="text-sm text-muted-foreground mb-5">{t("course_onetime")}</p>
                <Button variant="accent" className="w-full" size="lg">{t("course_enroll")}</Button>
                <Button variant="outline" className="w-full mt-2">{t("course_wishlist")}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <h2 className="text-xl font-display font-bold mb-4">{t("what_youll_learn")}</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CourseDetail;
