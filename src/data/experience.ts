import { ExperienceItem } from "@/types/experience.types";

export const experienceData: ExperienceItem[] = [
  {
    id: "fe-experience",
    type: "work",
    title: "Frontend Developer",
    organization: "Practical Projects & Web Solutions",
    period: "2025 — Present (1 Year Experience)",
    description:
      "Specialized in architecting and implementing modern, accessible web interfaces using React, Next.js, TypeScript, Ant Design, and Tailwind CSS. Focused on component modularity, state management, and performance optimization.",
    skills: ["React", "Next.js", "TypeScript", "Ant Design", "Tailwind CSS"],
    current: true,
  },
  {
    id: "hitu-education",
    type: "education",
    title: "Information Technology (Công Nghệ Thông Tin)",
    organization: "Cao Đẳng Công Thương TP.HCM (HITU)",
    period: "2022 — 2026",
    description:
      "Comprehensive curriculum focusing on computer science foundations, algorithms, object-oriented programming, relational databases (PostgreSQL, MySQL), and software engineering practices.",
    skills: ["Data Structures", "OOP", "Database Design", "Web Development"],
    current: true,
  },
];
