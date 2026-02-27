import Layout from "@/components/layout/Layout";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user, profile } = useAuth();
  const { t } = useLanguage();

  const displayName = profile?.display_name || user?.email?.split("@")[0] || "";

  const dashboardCards = [
    { icon: BookOpen, label: t("dash_enrolled"), value: "0", color: "text-accent" },
    { icon: Clock, label: t("dash_hours"), value: "0", color: "text-[hsl(var(--info))]" },
    { icon: Award, label: t("dash_certificates"), value: "0", color: "text-[hsl(var(--warning))]" },
    { icon: TrendingUp, label: t("dash_completion"), value: "0%", color: "text-[hsl(var(--success))]" },
  ];

  return (
    <Layout hideFooter>
      <div className="container py-10">
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">
          {t("dash_welcome")}, {displayName}!
        </h1>
        <p className="text-muted-foreground mb-8">{t("dash_subtitle")}</p>

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
        <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
          <BookOpen className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
          <p className="text-muted-foreground mb-4">{t("dash_no_courses")}</p>
          <Button variant="accent" asChild>
            <Link to="/courses">{t("dash_browse")}</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
