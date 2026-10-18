"use client";

import React from "react";
import Link from "next/link";
import { Card, Tag, Button, Image } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  GitBranch,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Project } from "@/types/project.types";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface ProjectCaseStudyProps {
  project: Project;
}

export function ProjectCaseStudyView({ project }: ProjectCaseStudyProps) {
  const caseStudy = project.caseStudy;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      {/* 5.3 Breadcrumbs & Back Navigation */}
      <nav aria-label="Breadcrumbs" className="flex items-center justify-between gap-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all projects</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/#projects" className="hover:underline">Projects</Link>
          <span>/</span>
          <span className="text-[var(--accent-primary)] font-semibold">{project.title}</span>
        </div>
      </nav>

      {/* 1. Project Overview & Hero Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Tag color="cyan" className="!font-medium !rounded-md !px-3 !py-0.5">
            {project.status}
          </Tag>
          <span className="text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider">
            {project.tagline}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          {caseStudy?.overview || project.description}
        </p>

        {/* Action Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<GithubOutlined />}
            size="large"
            className="!h-11 !px-6 !rounded-xl !border-[var(--border-subtle)] !bg-[var(--bg-secondary)] !text-[var(--text-primary)] hover:!border-[var(--accent-primary)] hover:!text-[var(--accent-primary)]"
          >
            Source Code on GitHub
          </Button>

          {project.liveUrl && (
            <Button
              type="primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink className="w-4 h-4 text-white dark:text-black" />}
              size="large"
              className="!h-11 !px-6 !rounded-xl !bg-[var(--accent-primary)] hover:!opacity-95 !text-white dark:!text-black !font-semibold !border-none"
            >
              Live Demo
            </Button>
          )}
        </div>
      </header>

      {/* 9. Hero Screenshot & Gallery (Ant Design Lightbox) */}
      <ScrollReveal direction="up">
        <section aria-label="Screenshots Showcase">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-lg group">
            <Image
              src={project.thumbnail}
              alt={`${project.title} Interface Preview`}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              preview={{
                mask: (
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Sparkles className="w-4 h-4" />
                    <span>Click to view full-resolution screenshot</span>
                  </div>
                ),
              }}
            />
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-3">
            Figure 1: {caseStudy?.screenshots?.[0]?.caption || `${project.title} user interface overview`}
          </p>
        </section>
      </ScrollReveal>

      {/* 2 & 3. Problem and Motivation & Proposed Solution */}
      <ScrollReveal direction="up">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-5 shadow-sm">
            <div className="flex items-center gap-2.5 text-rose-400 mb-3 font-semibold text-sm uppercase tracking-wider font-mono">
              <AlertTriangle className="w-4 h-4" />
              <span>Problem & Motivation</span>
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              The Friction in Traditional Learning
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {caseStudy?.problem}
            </p>
          </Card>

          <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-5 shadow-sm">
            <div className="flex items-center gap-2.5 text-emerald-400 mb-3 font-semibold text-sm uppercase tracking-wider font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>Proposed Solution</span>
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              Lightweight, Speech-Enabled PWA
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {caseStudy?.solution}
            </p>
          </Card>
        </section>
      </ScrollReveal>

      {/* 4. Tech Stack & Architectural Justification */}
      {caseStudy?.techStackDetails && (
        <ScrollReveal direction="up">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Engineering Decisions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Technology Stack & Rationale
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {caseStudy.techStackDetails.map((tech) => (
                <Card
                  key={tech.tech}
                  className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-xl !p-2 hover:!border-[var(--accent-primary)]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-base text-[var(--text-primary)]">
                      {tech.tech}
                    </span>
                    <Tag className="!border-[var(--border-subtle)] !bg-[var(--bg-primary)] !text-xs !text-[var(--text-muted)] !m-0">
                      {tech.category}
                    </Tag>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {tech.reason}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* 5. Main Features Deep Dive */}
      {caseStudy?.mainFeatures && (
        <ScrollReveal direction="up">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Capability Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Main Features & Implementation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {caseStudy.mainFeatures.map((feature, i) => (
                <Card
                  key={feature.title}
                  className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-xl !p-2 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-base text-[var(--text-primary)]">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* 6. Technical Architecture & Data Flow */}
      {caseStudy?.architecture && (
        <ScrollReveal direction="up">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider">
              <GitBranch className="w-4 h-4" />
              <span>System Design</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Technical Architecture & Data Flow
            </h2>

            <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-6 shadow-sm">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {caseStudy.architecture.summary}
              </p>

              <h3 className="text-xs font-mono uppercase font-semibold text-[var(--text-primary)] mb-3 tracking-wider">
                Data Flow Pipeline:
              </h3>

              <div className="space-y-3">
                {caseStudy.architecture.flow.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs text-[var(--text-secondary)]"
                  >
                    <span className="font-mono text-[var(--accent-primary)] font-bold">
                      Step {idx + 1}:
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </ScrollReveal>
      )}

      {/* 7. Engineering Challenges & Solutions */}
      {caseStudy?.challenges && (
        <ScrollReveal direction="up">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Problem Solving</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Engineering Challenges Encountered
            </h2>

            <div className="space-y-4 pt-2">
              {caseStudy.challenges.map((challenge) => (
                <Card
                  key={challenge.title}
                  className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-5 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-[var(--text-secondary)]">
                      <span className="font-semibold text-rose-400 block mb-1">Challenge:</span>
                      {challenge.description}
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[var(--text-secondary)]">
                      <span className="font-semibold text-emerald-400 block mb-1">Engineering Solution:</span>
                      {challenge.solution}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* 8. Lessons Learned */}
      {caseStudy?.lessonsLearned && (
        <ScrollReveal direction="up">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Growth & Takeaways</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Key Lessons Learned
            </h2>

            <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                {caseStudy.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </ScrollReveal>
      )}

      {/* 10. Footer Navigation & Next Project */}
      <footer className="pt-10 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
        <Link href="/#projects">
          <Button
            size="large"
            icon={<ArrowLeft className="w-4 h-4" />}
            className="!h-11 !px-5 !rounded-xl !border-[var(--border-subtle)] !bg-[var(--bg-secondary)] !text-[var(--text-primary)]"
          >
            Back to Projects List
          </Button>
        </Link>

        <Link href="/#contact">
          <Button
            type="primary"
            size="large"
            className="!h-11 !px-6 !rounded-xl !bg-[var(--accent-primary)] hover:!opacity-95 !text-white dark:!text-black !font-semibold !border-none !flex !items-center !gap-2"
          >
            Discuss this Project
            <ArrowRight className="w-4 h-4 text-white dark:text-black" />
          </Button>
        </Link>
      </footer>
    </article>
  );
}
