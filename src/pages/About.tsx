import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import SectionContainer from "@/components/shared/SectionContainer";
import { Target, Eye, Lightbulb } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t("value_quality"), description: t("value_quality_desc") },
    { icon: Eye, title: t("value_clarity"), description: t("value_clarity_desc") },
    { icon: Lightbulb, title: t("value_practical"), description: t("value_practical_desc") },
  ];

  return (
    <Layout>
      <div className="container">
        <PageHeader title={t("about_title")} subtitle={t("about_subtitle")} />
      </div>

      <SectionContainer className="bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold mb-4">{t("our_story")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("our_story_text")}</p>
        </div>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl font-display font-bold text-center mb-10">{t("values_title")}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default About;
