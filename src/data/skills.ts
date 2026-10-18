import { SkillCategory } from "@/types/skill.types";

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Creating accessible, dynamic, and fluid user interfaces.",
    icon: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Ant Design", highlight: true },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Designing modular, secure, and scalable server architectures.",
    icon: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "RESTful APIs", highlight: true },
      { name: "Authentication (JWT & Session)" },
      { name: "API Design & Security" },
    ],
  },
  {
    id: "database",
    title: "Databases & Storage",
    description: "Structuring relational schemas and relational persistence layers.",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "Relational Modeling" },
      { name: "SQL Query Optimization" },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Workflow",
    description: "Modern development toolchain and cloud deployments.",
    icon: "Wrench",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Vercel", highlight: true },
      { name: "Render", highlight: true },
      { name: "pnpm" },
      { name: "Figma" },
    ],
  },
];
