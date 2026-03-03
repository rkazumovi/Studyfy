import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/hooks/useAuth";
import { useUserRole, useInstructorCourses } from "@/hooks/useCourses";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Plus, BookOpen, Users, Star, Edit } from "lucide-react";
import { Navigate } from "react-router-dom";

const InstructorDashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const { data: roles, isLoading: rolesLoading } = useUserRole();
  const { data: courses, isLoading: coursesLoading } = useInstructorCourses();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    subject: "Mathematics",
    level: "Beginner",
    duration: "",
    price: "0",
    enrollment_type: "free",
  });

  const isInstructor = roles?.includes("instructor");

  if (rolesLoading) {
    return (
      <Layout>
        <div className="container py-20">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-48 w-full" />
        </div>
      </Layout>
    );
  }

  if (!isInstructor) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleCreate = async () => {
    if (!form.title.trim()) return;
    const { error } = await supabase.from("courses").insert({
      title: form.title,
      description: form.description,
      subject: form.subject,
      level: form.level,
      duration: form.duration,
      price: parseFloat(form.price) || 0,
      enrollment_type: form.enrollment_type,
      instructor_id: user!.id,
      published: false,
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Course created!" });
      queryClient.invalidateQueries({ queryKey: ["instructor-courses"] });
      setDialogOpen(false);
      setForm({ title: "", description: "", subject: "Mathematics", level: "Beginner", duration: "", price: "0", enrollment_type: "free" });
    }
  };

  return (
    <Layout hideFooter>
      <div className="container py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold">Instructor Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage your courses and content</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="accent">
                <Plus className="h-4 w-4 mr-2" /> New Course
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create New Course</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input placeholder="Course title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
                <Textarea placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                <div className="grid grid-cols-2 gap-4">
                  <Select value={form.subject} onValueChange={v => setForm(f => ({ ...f, subject: v }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {["Mathematics", "Physics", "Programming", "Engineering", "Data Science & AI", "Space & Astronomy", "Chemistry", "Technology & Innovation"].map(s => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={form.level} onValueChange={v => setForm(f => ({ ...f, level: v }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {["Beginner", "Intermediate", "Advanced"].map(l => (
                        <SelectItem key={l} value={l}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Duration (e.g. 24h)" value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))} />
                  <Input placeholder="Price" type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
                </div>
                <Select value={form.enrollment_type} onValueChange={v => setForm(f => ({ ...f, enrollment_type: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="trial">Trial</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="accent" className="w-full" onClick={handleCreate}>Create Course</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {coursesLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => <Skeleton key={i} className="h-24 w-full" />)}
          </div>
        ) : courses && courses.length > 0 ? (
          <div className="space-y-4">
            {courses.map(course => (
              <div key={course.id} className="rounded-xl border border-border bg-card p-5 flex items-center gap-5 shadow-card">
                <div className="w-20 h-14 rounded-lg bg-muted overflow-hidden shrink-0">
                  {course.thumbnail && <img src={course.thumbnail} alt="" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-semibold text-sm truncate">{course.title}</h3>
                    <Badge variant={course.published ? "default" : "outline"} className="text-[10px] shrink-0">
                      {course.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{course.subject}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students_count}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3" />{Number(course.rating).toFixed(1)}</span>
                    <span>${Number(course.price).toFixed(2)}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
            <BookOpen className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground mb-4">No courses yet. Create your first course!</p>
            <Button variant="accent" onClick={() => setDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" /> Create Course
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default InstructorDashboard;
