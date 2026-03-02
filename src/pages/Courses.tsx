import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import CourseCard from "@/components/shared/CourseCard";
import { sampleCourses } from "@/data/courses";
import { subjects } from "@/data/subjects";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";

const Courses = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubject = searchParams.get("subject") || "";
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    let courses = sampleCourses;
    if (activeSubject) {
      courses = courses.filter((c) => c.subject === activeSubject);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      courses = courses.filter(
        (c) => c.title.toLowerCase().includes(q) || c.subject.toLowerCase().includes(q)
      );
    }
    return courses;
  }, [activeSubject, search]);

  const handleSubjectClick = (slug: string) => {
    if (slug === activeSubject) {
      searchParams.delete("subject");
    } else {
      searchParams.set("subject", slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="container">
        <PageHeader title={t("courses_title")} subtitle={t("courses_subtitle")} />

        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("courses_search")}
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Subject filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => { searchParams.delete("subject"); setSearchParams(searchParams); }}
            className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
              !activeSubject
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-card text-muted-foreground border-border hover:border-accent/50"
            }`}
          >
            {t("courses_all_subjects")}
          </button>
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSubjectClick(s.slug)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                activeSubject === s.slug
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-card text-muted-foreground border-border hover:border-accent/50"
              }`}
            >
              {t(s.translationKey)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              {t("dash_no_courses")}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
