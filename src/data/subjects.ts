import type { TranslationKey } from "@/i18n/translations";

export interface Subject {
  id: string;
  translationKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: string; // lucide icon name
  courseCount: number;
  slug: string;
}

export const subjects: Subject[] = [
  { id: "math", translationKey: "subject_math", descriptionKey: "subject_math_desc", icon: "Calculator", courseCount: 120, slug: "Mathematics" },
  { id: "physics", translationKey: "subject_physics", descriptionKey: "subject_physics_desc", icon: "Atom", courseCount: 85, slug: "Physics" },
  { id: "programming", translationKey: "subject_programming", descriptionKey: "subject_programming_desc", icon: "Code2", courseCount: 150, slug: "Programming" },
  { id: "engineering", translationKey: "subject_engineering", descriptionKey: "subject_engineering_desc", icon: "Cog", courseCount: 70, slug: "Engineering" },
  { id: "data-science", translationKey: "subject_data_science", descriptionKey: "subject_data_science_desc", icon: "BarChart3", courseCount: 90, slug: "Data Science & AI" },
  { id: "astronomy", translationKey: "subject_astronomy", descriptionKey: "subject_astronomy_desc", icon: "Telescope", courseCount: 45, slug: "Space & Astronomy" },
  { id: "chemistry", translationKey: "subject_chemistry", descriptionKey: "subject_chemistry_desc", icon: "FlaskConical", courseCount: 60, slug: "Chemistry" },
  { id: "technology", translationKey: "subject_technology", descriptionKey: "subject_technology_desc", icon: "Cpu", courseCount: 65, slug: "Technology & Innovation" },
];
