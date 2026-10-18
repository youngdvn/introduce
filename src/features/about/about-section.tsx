"use client";

import React from "react";
import { Card, Button, Tooltip } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Code2, GraduationCap, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { profileData } from "@/data/profile";

export function AboutSection() {
  const hasResume = Boolean(profileData.resumeFileName);

  return (
    <section id="about" aria-label="About Me Section" className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-20">
      <ScrollReveal direction="up">
        <SectionHeader
          badge="01. ABOUT"
          title="Background & Engineering Mindset"
          description="A look into my journey, core values, and what drives my development approach."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Bio Card */}
        <ScrollReveal direction="up" delay={0.1} className="lg:col-span-2">
          <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-4 shadow-sm">
            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              {profileData.bio.map((paragraph, index) => (
                <p key={index} className="text-[15px] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Action Row */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                <span>Location: {profileData.location}</span>
              </div>

              {hasResume && (
                <Tooltip title={`Download ${profileData.resumeFileName}`}>
                  <Button
                    type="primary"
                    icon={<DownloadOutlined className="text-white dark:text-black" />}
                    href={`/resume/${profileData.resumeFileName}`}
                    download={profileData.resumeFileName}
                    className="!bg-[var(--accent-primary)] hover:!opacity-95 !text-white dark:!text-black !font-semibold !h-10 !px-5 !rounded-lg !border-none"
                  >
                    Download Resume
                  </Button>
                </Tooltip>
              )}
            </div>
          </Card>
        </ScrollReveal>

        {/* Pillars / Key Highlights Side Cards */}
        <StaggerContainer staggerDelay={0.12} className="flex flex-col gap-4">
          <StaggerItem>
            <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-xl !p-2 shadow-sm hover:!border-[var(--accent-primary)]/40 hover:scale-[1.01] transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    Practical Experience
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-normal">
                    1 year specializing in modern React, Next.js, and TypeScript frontend applications.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-xl !p-2 shadow-sm hover:!border-[var(--accent-primary)]/40 hover:scale-[1.01] transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    Clean Architecture
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-normal">
                    Writing clean, self-documenting code with strong typing and modular patterns.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-xl !p-2 shadow-sm hover:!border-[var(--accent-primary)]/40 hover:scale-[1.01] transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    Formal Foundations
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-normal">
                    IT Major at Cao Đẳng Công Thương TP.HCM (2022 - 2026), grounded in algorithms & databases.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
