import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { subjects } from "@/data/subjects";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Calculator, Atom, Code2, Cog, BarChart3, Telescope, FlaskConical, Cpu } from "lucide-react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Calculator, Atom, Code2, Cog, BarChart3, Telescope, FlaskConical, Cpu,
};

const Subjects = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container">
        <PageHeader title={t("subjects_title")} subtitle={t("subjects_subtitle")} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-16">
          {subjects.map((subject) => {
            const Icon = iconMap[subject.icon];
            return (
              <Link
                key={subject.id}
                to={`/courses?subject=${encodeURIComponent(subject.slug)}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  {Icon && <Icon className="h-6 w-6 text-accent" />}
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-1">
                  {t(subject.translationKey)}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {t(subject.descriptionKey)}
                </p>
                <span className="text-xs font-medium text-accent">
                  {subject.courseCount} {t("courses_count")}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Subjects;
