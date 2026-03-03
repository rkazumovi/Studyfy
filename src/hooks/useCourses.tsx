import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useToast } from "./use-toast";

export interface Course {
  id: string;
  title: string;
  description: string | null;
  subject: string;
  instructor_id: string | null;
  price: number;
  thumbnail: string | null;
  level: string;
  duration: string | null;
  enrollment_type: string;
  published: boolean;
  students_count: number;
  rating: number;
  created_at: string;
  updated_at: string;
}

export interface CourseSection {
  id: string;
  course_id: string;
  title: string;
  order_index: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  section_id: string;
  title: string;
  content: string | null;
  video_url: string | null;
  duration_minutes: number;
  order_index: number;
  is_preview: boolean;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: string | null;
}

export const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Course[];
    },
  });
};

export const useCourse = (id: string | undefined) => {
  return useQuery({
    queryKey: ["course", id],
    enabled: !!id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id!)
        .single();
      if (error) throw error;
      return data as Course;
    },
  });
};

export const useCourseSections = (courseId: string | undefined) => {
  return useQuery({
    queryKey: ["course-sections", courseId],
    enabled: !!courseId,
    queryFn: async () => {
      const { data: sections, error: secError } = await supabase
        .from("course_sections")
        .select("*")
        .eq("course_id", courseId!)
        .order("order_index");
      if (secError) throw secError;

      const { data: lessons, error: lesError } = await supabase
        .from("lessons")
        .select("*")
        .in("section_id", sections.map((s: any) => s.id))
        .order("order_index");
      if (lesError) throw lesError;

      return (sections as any[]).map((s) => ({
        ...s,
        lessons: (lessons as any[]).filter((l) => l.section_id === s.id),
      })) as CourseSection[];
    },
  });
};

export const useEnrollment = (courseId: string | undefined) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["enrollment", courseId, user?.id],
    enabled: !!courseId && !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("course_id", courseId!)
        .eq("user_id", user!.id)
        .maybeSingle();
      if (error) throw error;
      return data as Enrollment | null;
    },
  });
};

export const useMyEnrollments = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["my-enrollments", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enrollments")
        .select("*, courses(*)")
        .eq("user_id", user!.id)
        .order("enrolled_at", { ascending: false });
      if (error) throw error;
      return data as (Enrollment & { courses: Course })[];
    },
  });
};

export const useEnroll = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (courseId: string) => {
      if (!user) throw new Error("Must be logged in");
      const { error } = await supabase.from("enrollments").insert({
        user_id: user.id,
        course_id: courseId,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enrollment"] });
      queryClient.invalidateQueries({ queryKey: ["my-enrollments"] });
      toast({ title: "Enrolled successfully!" });
    },
    onError: (err: any) => {
      toast({ title: "Enrollment failed", description: err.message, variant: "destructive" });
    },
  });
};

export const useLessonProgress = (courseId: string | undefined) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["lesson-progress", courseId, user?.id],
    enabled: !!courseId && !!user,
    queryFn: async () => {
      // Get all lesson IDs for this course
      const { data: sections } = await supabase
        .from("course_sections")
        .select("id")
        .eq("course_id", courseId!);
      if (!sections?.length) return [];

      const { data: lessons } = await supabase
        .from("lessons")
        .select("id")
        .in("section_id", sections.map((s: any) => s.id));
      if (!lessons?.length) return [];

      const { data, error } = await supabase
        .from("lesson_progress")
        .select("*")
        .eq("user_id", user!.id)
        .in("lesson_id", lessons.map((l: any) => l.id));
      if (error) throw error;
      return data as LessonProgress[];
    },
  });
};

export const useToggleLessonComplete = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ lessonId, completed }: { lessonId: string; completed: boolean }) => {
      if (!user) throw new Error("Must be logged in");
      const { error } = await supabase
        .from("lesson_progress")
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          completed,
          completed_at: completed ? new Date().toISOString() : null,
        }, { onConflict: "user_id,lesson_id" });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lesson-progress"] });
    },
  });
};

export const useInstructorCourses = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["instructor-courses", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("instructor_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Course[];
    },
  });
};

export const useUserRole = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["user-role", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user!.id);
      if (error) throw error;
      return data?.map((r: any) => r.role as string) ?? [];
    },
  });
};
