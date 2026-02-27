import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import CourseCard from "@/components/shared/CourseCard";
import { sampleCourses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Courses = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container">
        <PageHeader title={t("courses_title")} subtitle={t("courses_subtitle")} />
        
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder={t("courses_search")} className="pl-10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {sampleCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
