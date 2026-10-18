"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button, Tooltip } from "antd";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/lib/use-mounted";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <Button
        type="text"
        aria-label="Toggle color theme"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="!flex !items-center !justify-center !w-10 !h-10 !rounded-lg !border !border-[var(--border-subtle)] !bg-[var(--bg-secondary)] hover:!border-[var(--accent-primary)] hover:!text-[var(--accent-primary)] !transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
        icon={
          isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-sky-500" />
          )
        }
      />
    </Tooltip>
  );
}
