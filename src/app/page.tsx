"use client";

import React from "react";
import { HeroSection } from "@/features/home/hero-section";
import { AboutSection } from "@/features/about/about-section";
import { SkillsSection } from "@/features/skills/skills-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { ContactSection } from "@/features/contact/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-28 sm:gap-36 pb-20">
      {/* 5.2 Hero Section */}
      <HeroSection />

      {/* 5.3 About Me Section */}
      <AboutSection />

      {/* 5.4 Technical Skills Section */}
      <SkillsSection />

      {/* 5.5 Featured Projects Section */}
      <ProjectsSection />

      {/* 5.7 Experience & Education Timeline */}
      <ExperienceSection />

      {/* 5.8 Contact Section */}
      <ContactSection />
    </div>
  );
}
