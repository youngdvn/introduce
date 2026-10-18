"use client";

import React from "react";
import { Timeline, Card, Tag } from "antd";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  if (!experienceData || experienceData.length === 0) {
    return null;
  }

  const timelineItems = experienceData.map((item) => {
    const isWork = item.type === "work";

    return {
      dot: (
        <div
          className={`w-9 h-9 rounded-full border flex items-center justify-center -ml-2.5 transition-transform hover:scale-110 ${
            isWork
              ? "bg-[var(--accent-glow)] border-[var(--accent-primary)] text-[var(--accent-primary)]"
              : "bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-secondary)]"
          }`}
        >
          {isWork ? (
            <Briefcase className="w-4 h-4" />
          ) : (
            <GraduationCap className="w-4 h-4" />
          )}
        </div>
      ),
      children: (
        <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-5 shadow-sm hover:!border-[var(--accent-primary)]/40 hover:scale-[1.01] transition-all ml-2 mb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-mono font-medium text-[var(--accent-primary)] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
            {item.current && (
              <Tag color="cyan" className="!rounded-md !px-2 !text-[11px]">
                Active
              </Tag>
            )}
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            {item.title}
          </h3>

          <h4 className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
            {item.organization}
          </h4>

          <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
            {item.description}
          </p>

          {item.skills && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <Tag
                  key={skill}
                  className="!border-[var(--border-subtle)] !bg-[var(--bg-primary)] !text-xs !text-[var(--text-muted)] !px-2 !py-0.5 !rounded-md"
                >
                  {skill}
                </Tag>
              ))}
            </div>
          )}
        </Card>
      ),
    };
  });

  return (
    <section
      id="experience"
      aria-label="Experience and Education Timeline"
      className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-20"
    >
      <ScrollReveal direction="up">
        <SectionHeader
          badge="04 // TIMELINE"
          title="Experience & Education"
          description="Formal academic qualifications and hands-on professional development trajectory."
        />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} className="pt-2">
        <Timeline mode="left" items={timelineItems} />
      </ScrollReveal>
    </section>
  );
}
