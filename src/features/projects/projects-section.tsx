"use client";

import React from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "./project-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-20"
    >
      <ScrollReveal direction="up">
        <SectionHeader
          badge="03. PORTFOLIO"
          title="Featured Engineering Works"
          description="Production-oriented projects built to solve practical challenges with modern software engineering practices."
        />
      </ScrollReveal>

      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <ScrollReveal key={project.slug} direction="up" delay={index * 0.15}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
