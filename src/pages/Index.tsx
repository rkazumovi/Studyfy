import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionContainer from "@/components/shared/SectionContainer";
import CourseCard from "@/components/shared/CourseCard";
import { sampleCourses } from "@/data/courses";
import { ArrowRight, BookOpen, Users, Award, Zap } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "500+", label: "Courses" },
  { icon: Users, value: "120K+", label: "Students" },
  { icon: Award, value: "95%", label: "Completion Rate" },
  { icon: Zap, value: "50+", label: "Expert Instructors" },
];

const subjects = [
  { name: "Mathematics", count: 120, emoji: "📐" },
  { name: "Physics", count: 85, emoji: "⚛️" },
  { name: "Programming", count: 150, emoji: "💻" },
  { name: "Engineering", count: 70, emoji: "⚙️" },
  { name: "Data Science", count: 90, emoji: "📊" },
  { name: "Technology", count: 65, emoji: "🔬" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(174 62% 42% / 0.3) 0%, transparent 50%)" }} />
      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent/20 text-accent-foreground/90 border border-accent/20">
            Learn from the best — at your own pace
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight tracking-tight">
            Master Science &<br />
            <span className="text-gradient">Technology</span> with Confidence
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl">
            From calculus to quantum computing — structured courses designed by experts for real understanding.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/courses">Explore Courses <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
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
          <h2 className="text-2xl md:text-3xl font-display font-bold">Popular Courses</h2>
          <p className="mt-2 text-muted-foreground">Start learning with our top-rated programs</p>
        </div>
        <Button variant="ghost" asChild className="hidden md:flex">
          <Link to="/courses">View all <ArrowRight className="h-4 w-4" /></Link>
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
        <h2 className="text-2xl md:text-3xl font-display font-bold">Browse by Subject</h2>
        <p className="mt-2 text-muted-foreground">Find courses in the discipline that excites you</p>
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
              <p className="text-sm text-muted-foreground">{s.count} courses</p>
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>

    {/* CTA */}
    <SectionContainer>
      <div className="bg-hero rounded-2xl p-10 md:p-16 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">Ready to start learning?</h2>
        <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
          Join thousands of students building real skills in math, science, and tech.
        </p>
        <Button variant="hero" size="lg" className="mt-6" asChild>
          <Link to="/register">Get Started Free <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </SectionContainer>
  </Layout>
);

export default Index;
