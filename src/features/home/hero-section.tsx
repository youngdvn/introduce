"use client";

import React from "react";
import { Button, Tooltip } from "antd";
import { ArrowDown, Mail } from "lucide-react";
import { GithubOutlined } from "@ant-design/icons";
import { profileData } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const anim = (initialY: number, delay: number) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      };
    }
    return {
      initial: { opacity: 0, y: initialY },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay },
    };
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="min-h-[88vh] flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto relative pt-8 pb-16"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[400px] bg-[var(--accent-primary)]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Availability Status Badge */}
      {profileData.availability.status && (
        <motion.div
          {...anim(-12, 0)}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-sm hover:border-[var(--accent-primary)]/40 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-[var(--text-secondary)] tracking-wide">
            {profileData.availability.text}
          </span>
        </motion.div>
      )}

      {/* Main Heading & Role */}
      <motion.div {...anim(16, 0.1)}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-5">
          Hi, I&apos;m{" "}
          <span className="text-[var(--text-primary)]">
            {profileData.name}
          </span>{" "}
          <span className="text-[var(--text-muted)] font-normal text-3xl sm:text-5xl block sm:inline">
            ({profileData.displayName})
          </span>
          <span className="block mt-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            {profileData.role}
          </span>
        </h1>
      </motion.div>

      {/* Slogan & Professional Introduction */}
      <motion.p
        {...anim(16, 0.2)}
        className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        {profileData.headline} Specializing in building resilient, modern web
        applications with clean code, strong performance, and intuitive user experiences.
      </motion.p>

      {/* Call to Action Controls */}
      <motion.div
        {...anim(16, 0.3)}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Button
          type="primary"
          size="large"
          href="#projects"
          className="!bg-[var(--accent-primary)] hover:!opacity-95 !font-semibold !h-12 !px-8 !rounded-xl !shadow-md !border-none !flex !items-center !gap-2"
        >
          View My Work
          <ArrowDown className="w-4 h-4" />
        </Button>

        <Button
          size="large"
          href="#contact"
          className="!h-12 !px-8 !rounded-xl !border-[var(--border-subtle)] !bg-[var(--bg-secondary)] !text-[var(--text-primary)] hover:!border-[var(--accent-primary)] hover:!text-[var(--accent-primary)] !flex !items-center !gap-2"
        >
          <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
          Contact Me
        </Button>

        <Tooltip title="GitHub Profile (@duycao04)">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <GithubOutlined className="text-xl" />
          </a>
        </Tooltip>
      </motion.div>

      {/* Stats Highlights */}
      {profileData.stats && (
        <motion.div
          {...anim(0, 0.4)}
          className="mt-14 pt-8 border-t border-[var(--border-subtle)]/70 grid grid-cols-3 gap-6 sm:gap-12 text-center"
        >
          {profileData.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[var(--accent-primary)]">
                {stat.value}
              </span>
              <span className="text-xs text-[var(--text-muted)] mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Subtle Scroll Hint */}
      <div className="hidden sm:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-xs text-[var(--text-muted)] pointer-events-none">
        <span>Scroll down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent-primary)]" />
      </div>
    </section>
  );
}
