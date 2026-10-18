"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubOutlined } from "@ant-design/icons";
import { FloatButton, Tooltip } from "antd";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand & Slogan */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <Link
                href="/#hero"
                aria-label="Back to hero section"
                className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-lg p-1"
              >
                <div className="w-7 h-7 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center font-mono font-bold text-xs text-[var(--accent-primary)]">
                  YD
                </div>
                <span className="font-bold text-base text-[var(--text-primary)]">
                  Cao Tan Duy <span className="text-[var(--text-muted)] font-normal">({`YoungD`})</span>
                </span>
              </Link>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Building thoughtful digital experiences, from frontend to backend.
              </p>
            </div>

            {/* Navigation Anchor Links */}
            <nav aria-label="Footer Navigation" className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
              <Link href="/#about" className="hover:text-[var(--accent-primary)] transition-colors">
                About
              </Link>
              <Link href="/#skills" className="hover:text-[var(--accent-primary)] transition-colors">
                Skills
              </Link>
              <Link href="/#projects" className="hover:text-[var(--accent-primary)] transition-colors">
                Projects
              </Link>
              <Link href="/#experience" className="hover:text-[var(--accent-primary)] transition-colors">
                Experience
              </Link>
              <Link href="/#contact" className="hover:text-[var(--accent-primary)] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Social Links & Back to Top */}
            <div className="flex items-center gap-3">
              <Tooltip title="GitHub Repository">
                <a
                  href="https://github.com/duycao04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <GithubOutlined className="text-base" />
                </a>
              </Tooltip>
              <Tooltip title="Email Me">
                <a
                  href="mailto:dcao59995@gmail.com"
                  aria-label="Email Cao Tan Duy"
                  className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </Tooltip>
              <Tooltip title="Back to top">
                <button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Copyright & Meta */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-3">
            <p>© {currentYear} Cao Tan Duy (YoungD). All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with Next.js, Ant Design & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <FloatButton.BackTop
        visibilityHeight={300}
        shape="square"
        tooltip="Back to Top"
        className="!right-6 !bottom-6"
      />
    </>
  );
}
