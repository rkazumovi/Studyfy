# 📚 Studyfy

A modern, production-grade eCommerce learning platform for structured education in mathematics, physics, programming, engineering, science, and technology — inspired by platforms like Coursera and Brilliant.org. Studyfy includes a real, database-backed course catalog, working authentication, role-based instructor tools, and multilingual support.

🔗 **Live Demo:** [studyfy-app.lovable.app](https://studyfy-app.lovable.app/)
📂 **Repository:** [github.com/rkazumovi/Studyfy](https://github.com/rkazumovi/Studyfy)
🛠️ Built with [Lovable](https://lovable.dev/)

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)

---

## Overview

Studyfy provides a scalable foundation for a real online education system: a browsable course catalog organized by subject, individual course pages, working sign-up/login, a student dashboard, and a role-based instructor dashboard for creating and managing courses. Data — courses, enrollments, lesson progress, and user profiles — is stored in a real PostgreSQL database via Supabase, not mocked.

## 🧠 Key Features

**📖 Learning Platform**
- Course catalog organized by subject (Mathematics, Physics, Programming, etc.)
- Individual course detail pages with sections and lessons
- Subject-based navigation

**👤 Authentication & Roles**
- Real email/password authentication via Supabase Auth (sign up, sign in, sign out, session persistence)
- Route protection — authenticated-only pages redirect to login
- Role-based access (student vs. instructor) backed by a dedicated `user_roles` table
- 30-day trial period tracking per user

**🎓 Student Experience**
- Personal dashboard
- Enrollment and lesson-progress tracking, stored per user

**🧑‍🏫 Instructor Dashboard**
- Create, edit, and manage courses directly from the UI
- Course data persisted to and fetched live from Supabase, with optimistic updates via React Query

**💬 AI Chat Widget**
- Floating chat assistant UI with a conversational interface (currently returns placeholder responses; ready to be wired to a real AI backend)

**🌍 Internationalization**
- Supports 5 languages: English, Spanish, French, German, and Georgian, with persisted language preference

**🎨 Modern UI/UX**
- Clean academic design system (deep navy + teal palette)
- Built on [shadcn/ui](https://ui.shadcn.com/) components (Radix primitives + Tailwind)
- Fully responsive across mobile, tablet, and desktop
- Dark/light mode via `next-themes`

**💳 Pricing**
- Three-tier pricing page (Free, Pro, Team)

## 🏗️ Pages Included

- Home (landing page with hero, stats, CTA)
- Courses Catalog
- Subjects
- Course Detail Page
- Learn (course/lesson player view)
- Pricing (3 tiers)
- About
- Dashboard (student)
- Instructor Dashboard
- Login
- Register
- 404 / Not Found

## 🛠️ Built With

**Languages**
- TypeScript — application, component, and hook logic
- SQL — database schema and migrations
- CSS — styling via Tailwind CSS

**Frameworks / Libraries**
- [React](https://react.dev/) 18 — UI library
- [React Router](https://reactrouter.com/) — client-side routing
- [TanStack React Query](https://tanstack.com/query) — server-state management, caching, and mutations
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) — accessible, composable UI component primitives
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — form handling and validation
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light mode
- [Recharts](https://recharts.org/) — charts (instructor/course analytics)
- [Lucide React](https://lucide.dev/) — icon set

**Backend / Database**
- [Supabase](https://supabase.com/) — authentication, PostgreSQL database, and API layer, provisioned via Lovable Cloud
- Real database schema: `profiles`, `user_roles`, `courses`, `course_sections`, `lessons`, `enrollments`, `lesson_progress`

**Testing**
- [Vitest](https://vitest.dev/) — unit testing framework
- [React Testing Library](https://testing-library.com/react) — component testing

**Build Tools & Tooling**
- [Vite](https://vitejs.dev/) — build tool and dev server
- [ESLint](https://eslint.org/) + [typescript-eslint](https://typescript-eslint.io/) — linting and type-aware code quality
- [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) — CSS processing

**Platform / Deployment**
- [Lovable](https://lovable.dev/) — AI-assisted development platform and hosting

## 📁 Project Structure

```
src/
├── App.tsx
├── main.tsx
├── components/
│   ├── layout/            # Navbar, Footer, Layout wrapper
│   ├── shared/             # CourseCard, PageHeader, SectionContainer
│   ├── chat/                # AIChatbot widget
│   ├── ui/                    # shadcn/ui component library
│   ├── NavLink.tsx
│   └── ProtectedRoute.tsx
├── pages/                        # Route-level pages (Index, Courses, CourseDetail,
│                                  # Subjects, Learn, Pricing, About, Dashboard,
│                                  # InstructorDashboard, Login, Register, NotFound)
├── hooks/
│   ├── useAuth.tsx           # Supabase auth context (sign up/in/out, session, trial)
│   ├── useCourses.tsx        # React Query hooks for courses, enrollments, roles
│   ├── useTheme.tsx
│   └── use-mobile.tsx
├── i18n/
│   ├── LanguageContext.tsx
│   └── translations.ts       # en, es, fr, de, ka
├── integrations/
│   └── supabase/             # Supabase client and generated types
├── data/                      # Static subject/course reference data
├── lib/
│   └── utils.ts
└── test/                       # Vitest setup and example tests

supabase/
└── migrations/                 # SQL migrations (profiles, user_roles, courses,
                                 # course_sections, lessons, enrollments, lesson_progress)
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (or [Bun](https://bun.sh/) — a `bun.lockb` lockfile is included)
- A [Supabase](https://supabase.com/) project (URL, publishable key, and project ID)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/rkazumovi/Studyfy.git
   cd Studyfy
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables

   Create a `.env` file in the project root:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   VITE_SUPABASE_PROJECT_ID=your_supabase_project_id
   ```

4. Apply the database migrations in `supabase/migrations/` to your Supabase project.

5. Start the development server
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm run test
```

### Lint

```bash
npm run lint
```

## 📦 Deployment

Studyfy is built and deployed via **Lovable**, with Supabase (Lovable Cloud) as the backend. It's live at:
👉 [studyfy-app.lovable.app](https://studyfy-app.lovable.app/)

## 🔮 Future Enhancements

- Payment processing for premium courses
- AI-powered learning recommendations and a fully functional AI chatbot (backend wiring)
- Course video streaming integration
- Expanded language and RTL support

## 👨‍💻 Author

Built by **Rasul Kazumovi**
Other projects: Studyfy, Gemutly, and more

## 📄 License

This project is part of a personal portfolio and learning system.
