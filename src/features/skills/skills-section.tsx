"use client";

import React from "react";
import { Card, Tag } from "antd";
import { Layout, Server, Database, Wrench, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { skillsData } from "@/data/skills";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Technical Skills Section" className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-20">
      <ScrollReveal direction="up">
        <SectionHeader
          badge="02 // EXPERTISE"
          title="Technical Skills & Toolchain"
          description="Structured categories of languages, frameworks, databases, and DevOps tools I use daily."
        />
      </ScrollReveal>

      {/* Bento Grid Composition with Stagger Animation */}
      <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <StaggerItem key={category.id}>
            <Card
              className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl hover:!border-[var(--accent-primary)]/40 hover:scale-[1.01] transition-all duration-300 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                    {ICON_MAP[category.icon] || <Wrench className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tag Cloud */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill) => (
                    <Tag
                      key={skill.name}
                      className={`!px-3 !py-1.5 !rounded-lg !text-xs !font-medium !transition-colors !m-0 ${
                        skill.highlight
                          ? "!border-[var(--accent-primary)]/30 !bg-[var(--accent-glow)] !text-[var(--text-primary)]"
                          : "!border-[var(--border-subtle)] !bg-[var(--bg-primary)] !text-[var(--text-secondary)] hover:!text-[var(--text-primary)]"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                        )}
                        {skill.name}
                      </span>
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--border-subtle)]/50 flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                <span>{category.skills.length} items configured</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Production tested
                </span>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
