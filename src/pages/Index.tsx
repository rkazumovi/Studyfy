import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionContainer from "@/components/shared/SectionContainer";
import CourseCard from "@/components/shared/CourseCard";
import { sampleCourses } from "@/data/courses";
import { ArrowRight, BookOpen, Users, Award, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: BookOpen, value: "500+", label: t("stat_courses") },
    { icon: Users, value: "120K+", label: t("stat_students") },
    { icon: Award, value: "95%", label: t("stat_completion") },
    { icon: Zap, value: "50+", label: t("stat_instructors") },
  ];

  const subjects = [
    { name: t("subject_math"), count: 120, emoji: "📐" },
    { name: t("subject_physics"), count: 85, emoji: "⚛️" },
    { name: t("subject_programming"), count: 150, emoji: "💻" },
    { name: t("subject_engineering"), count: 70, emoji: "⚙️" },
    { name: t("subject_data_science"), count: 90, emoji: "📊" },
    { name: t("subject_technology"), count: 65, emoji: "🔬" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(174 62% 42% / 0.3) 0%, transparent 50%)" }} />
        <div className="container relative py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent/20 text-accent-foreground/90 border border-accent/20">
              {t("hero_badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight tracking-tight">
              {t("hero_title_1")}<br />
              <span className="text-gradient">{t("hero_title_2")}</span> with Confidence
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl">
              {t("hero_subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/courses">{t("hero_cta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/pricing">{t("hero_pricing")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="h-6 w-6 mx-auto mb-2 text-accent" />
              <div className="text-2xl md:text-3xl font-display font-bold">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <SectionContainer>
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold">{t("popular_courses")}</h2>
            <p className="mt-2 text-muted-foreground">{t("popular_subtitle")}</p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/courses">{t("view_all")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCourses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </SectionContainer>

      {/* Subjects */}
      <SectionContainer className="bg-muted/50">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold">{t("browse_subject")}</h2>
          <p className="mt-2 text-muted-foreground">{t("browse_subject_subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {subjects.map((s) => (
            <Link
              key={s.name}
              to="/courses"
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-3xl">{s.emoji}</span>
              <div>
                <h3 className="font-display font-semibold text-card-foreground">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.count} {t("courses_count")}</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="bg-hero rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">{t("cta_title")}</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
            {t("cta_subtitle")}
          </p>
          <Button variant="hero" size="lg" className="mt-6" asChild>
            <Link to="/register">{t("cta_button")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Index;
