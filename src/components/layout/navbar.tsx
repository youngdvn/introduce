"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/85 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/#hero"
          aria-label="YoungD Home"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-lg px-2 py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center font-mono font-bold text-base text-[var(--accent-primary)] transition-transform group-hover:scale-105">
            YD
          </div>
          <span className="font-bold text-lg text-[var(--text-primary)] tracking-tight">
            Young<span className="text-[var(--accent-primary)]">D</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-[var(--bg-secondary)]/80 border border-[var(--border-subtle)] px-3 py-1.5 rounded-full shadow-sm"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent-primary)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[var(--accent-glow)] -z-10" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Socials */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/duycao04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <GithubOutlined className="text-base" />
          </a>
          <ThemeToggle />
          <Button
            type="primary"
            href="#contact"
            className="!hidden lg:!inline-flex !bg-[var(--accent-primary)] hover:!opacity-90 !text-black !font-semibold !h-10 !px-4 !rounded-lg !shadow-sm"
          >
            Get in touch
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileMenu navItems={NAV_ITEMS} activeSection={activeSection} />
      </div>
    </header>
  );
}
