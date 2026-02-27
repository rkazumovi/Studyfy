import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleCourses } from "@/data/courses";
import { Clock, Users, Star, BookOpen, ArrowLeft, CheckCircle2 } from "lucide-react";

const highlights = [
  "Lifetime access to all course materials",
  "Hands-on exercises and projects",
  "Certificate of completion",
  "Community forum access",
  "Downloadable resources",
];

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = sampleCourses.find((c) => c.id === id);

  if (!course) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Course not found</h1>
          <Button asChild><Link to="/courses">Back to Courses</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-hero">
        <div className="container py-12 md:py-16">
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> All Courses
          </Link>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <Badge variant="outline" className="mb-3 text-primary-foreground/80 border-primary-foreground/20">{course.subject}</Badge>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight">{course.title}</h1>
              <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                An in-depth, structured course designed to take you from foundational concepts to advanced applications with practical exercises.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{course.students.toLocaleString()} students</span>
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-studyfy-warning text-studyfy-warning" />{course.rating}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" />{course.level}</span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 shadow-elevated">
                <img src={course.image} alt={course.title} className="w-full aspect-video rounded-lg object-cover mb-5" />
                <div className="text-3xl font-display font-bold text-card-foreground mb-1">{course.price}</div>
                <p className="text-sm text-muted-foreground mb-5">One-time purchase · Lifetime access</p>
                <Button variant="accent" className="w-full" size="lg">Enroll Now</Button>
                <Button variant="outline" className="w-full mt-2">Add to Wishlist</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <h2 className="text-xl font-display font-bold mb-4">What You'll Learn</h2>
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
