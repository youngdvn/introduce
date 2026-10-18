"use client";

import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { GithubOutlined } from "@ant-design/icons";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  activeSection: string;
}

export function MobileMenu({ navItems, activeSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <Button
        type="text"
        aria-label="Open navigation menu"
        onClick={showDrawer}
        className="!flex !items-center !justify-center !w-10 !h-10 !rounded-lg !border !border-[var(--border-subtle)] !bg-[var(--bg-secondary)] hover:!border-[var(--accent-primary)] hover:!text-[var(--accent-primary)] !transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
        icon={<Menu className="w-5 h-5 text-[var(--text-primary)]" />}
      />

      <Drawer
        title={
          <div className="flex items-center justify-between w-full pr-2">
            <span className="font-bold text-lg text-[var(--text-primary)] tracking-tight">
              Young<span className="text-[var(--accent-primary)]">D</span>
            </span>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        width={300}
        closeIcon={<X className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />}
        styles={{
          body: {
            backgroundColor: "var(--bg-primary)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
          header: {
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border-subtle)",
          },
        }}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium min-h-[44px] transition-all ${
                  isActive
                    ? "bg-[var(--accent-glow)] text-[var(--accent-primary)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-3">
          <a
            href="https://github.com/duycao04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cao Tan Duy on GitHub"
            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm min-h-[44px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
          >
            <span className="flex items-center gap-2">
              <GithubOutlined className="text-base" />
              GitHub
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
          <a
            href="mailto:dcao59995@gmail.com"
            aria-label="Send email to dcao59995@gmail.com"
            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm min-h-[44px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
        </div>
      </Drawer>
    </div>
  );
}
