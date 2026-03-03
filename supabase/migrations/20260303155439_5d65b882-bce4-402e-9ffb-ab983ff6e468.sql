
-- 1. User roles
CREATE TYPE public.app_role AS ENUM ('student', 'instructor', 'admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'student',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;

CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name, trial_start_date)
  VALUES (new.id, new.raw_user_meta_data->>'display_name', now());
  INSERT INTO public.user_roles (user_id, role) VALUES (new.id, 'student');
  RETURN new;
END;
$$;

-- 2. Courses
CREATE TABLE public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  subject text NOT NULL,
  instructor_id uuid,
  price numeric(10,2) NOT NULL DEFAULT 0,
  thumbnail text,
  level text NOT NULL DEFAULT 'Beginner',
  duration text,
  enrollment_type text NOT NULL DEFAULT 'free',
  published boolean NOT NULL DEFAULT false,
  students_count integer NOT NULL DEFAULT 0,
  rating numeric(2,1) NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published courses" ON public.courses FOR SELECT USING (published = true);
CREATE POLICY "Instructors can manage own courses" ON public.courses FOR ALL
  USING (public.has_role(auth.uid(), 'instructor') AND instructor_id = auth.uid())
  WITH CHECK (public.has_role(auth.uid(), 'instructor') AND instructor_id = auth.uid());
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3. Sections
CREATE TABLE public.course_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.course_sections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view sections of published courses" ON public.course_sections FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.courses WHERE id = course_id AND published = true));
CREATE POLICY "Instructors can manage sections" ON public.course_sections FOR ALL
  USING (EXISTS (SELECT 1 FROM public.courses WHERE id = course_id AND instructor_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.courses WHERE id = course_id AND instructor_id = auth.uid()));

-- 4. Enrollments
CREATE TABLE public.enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  enrolled_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id)
);
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own enrollments" ON public.enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can enroll" ON public.enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 5. Lessons
CREATE TABLE public.lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id uuid REFERENCES public.course_sections(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text,
  video_url text,
  duration_minutes integer NOT NULL DEFAULT 0,
  order_index integer NOT NULL DEFAULT 0,
  is_preview boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Preview lessons visible" ON public.lessons FOR SELECT
  USING (is_preview = true AND EXISTS (
    SELECT 1 FROM public.course_sections cs JOIN public.courses c ON c.id = cs.course_id
    WHERE cs.id = section_id AND c.published = true));
CREATE POLICY "Enrolled users see all lessons" ON public.lessons FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.course_sections cs JOIN public.courses c ON c.id = cs.course_id
    JOIN public.enrollments e ON e.course_id = c.id
    WHERE cs.id = section_id AND e.user_id = auth.uid()));
CREATE POLICY "Instructors manage lessons" ON public.lessons FOR ALL
  USING (EXISTS (SELECT 1 FROM public.course_sections cs JOIN public.courses c ON c.id = cs.course_id WHERE cs.id = section_id AND c.instructor_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.course_sections cs JOIN public.courses c ON c.id = cs.course_id WHERE cs.id = section_id AND c.instructor_id = auth.uid()));

-- 6. Progress
CREATE TABLE public.lesson_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  lesson_id uuid REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  UNIQUE (user_id, lesson_id)
);
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own progress" ON public.lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert progress" ON public.lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update progress" ON public.lesson_progress FOR UPDATE USING (auth.uid() = user_id);
