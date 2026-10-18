import { DeveloperProfile } from "@/types/profile.types";

export const profileData: DeveloperProfile = {
  name: "Cao Tan Duy",
  displayName: "YoungD",
  role: "Full Stack Developer",
  headline: "Building thoughtful digital experiences, from frontend to backend.",
  bio: [
    "I am a passionate Full Stack Developer with 1 year of hands-on experience in Frontend Development, specializing in building responsive, high-performance web applications with React, Next.js, and TypeScript.",
    "Currently pursuing Information Technology at Cao Đẳng Công Thương TP.HCM (2022 - 2026), I focus on clean code, software architecture, modern UI/UX design with Ant Design & Tailwind CSS, and resilient backend systems powered by Node.js, Express, and PostgreSQL.",
    "Driven by continuous learning and problem-solving, I love turning complex engineering challenges into elegant, intuitive digital products."
  ],
  location: "Vietnam",
  email: "dcao59995@gmail.com",
  availability: {
    status: true,
    text: "Available for Work",
  },
  socials: {
    github: "https://github.com/duycao04",
    email: "dcao59995@gmail.com",
  },
  resumeFileName: "CaoTanDuy - FullStack Develop.pdf",
  stats: [
    { label: "Frontend Experience", value: "1+ Year" },
    { label: "Core Focus", value: "Full Stack" },
    { label: "Primary Stack", value: "Next.js / Node" },
  ],
};
