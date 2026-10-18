"use client";

import React from "react";
import { Card, Tag, Button, Image } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { Check, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project.types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl overflow-hidden shadow-sm hover:!border-[var(--accent-primary)]/40 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Project Thumbnail with Ant Design Image Lightbox */}
        <div className="lg:col-span-6 relative aspect-video rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-primary)] group">
          <Image
            src={project.thumbnail}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            preview={{
              mask: (
                <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Click to expand screenshot</span>
                </div>
              ),
            }}
          />
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <Tag color="cyan" className="!font-medium !rounded-md !px-2.5 !py-0.5 shadow-sm">
              {project.status}
            </Tag>
          </div>
        </div>

        {/* Project Content & Metadata */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-mono font-semibold text-[var(--accent-primary)] uppercase tracking-wider">
                {project.tagline}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>

            {/* Feature Highlights */}
            <div className="mt-4 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Key Features:
              </span>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-[var(--text-secondary)]">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag
                  key={tag}
                  className="!border-[var(--border-subtle)] !bg-[var(--bg-primary)] !text-xs !text-[var(--text-muted)] !px-2 !py-0.5 !rounded-md"
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
            <Link href={`/projects/${project.slug}`}>
              <Button
                type="primary"
                className="!bg-[var(--accent-primary)] hover:!opacity-95 !text-black !font-semibold !h-10 !px-5 !rounded-lg !flex !items-center !gap-1.5 !border-none"
              >
                Case Study
                <ArrowRight className="w-4 h-4 text-black" />
              </Button>
            </Link>

            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<GithubOutlined />}
              className="!h-10 !px-4 !rounded-lg !border-[var(--border-subtle)] !bg-[var(--bg-primary)] !text-[var(--text-primary)] hover:!border-[var(--accent-primary)] hover:!text-[var(--accent-primary)]"
            >
              GitHub Repo
            </Button>

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                className="!h-10 !px-4 !rounded-lg"
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
