"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ConfigProvider, App as AntdApp } from "antd";
import { antDarkTheme, antLightTheme } from "@/styles/theme";
import { useMounted } from "@/lib/use-mounted";

interface AntdThemeSyncProps {
  children: React.ReactNode;
}

function AntdThemeSync({ children }: AntdThemeSyncProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  const currentAntdTheme = mounted && resolvedTheme === "light" ? antLightTheme : antDarkTheme;

  return (
    <ConfigProvider theme={currentAntdTheme}>
      <AntdApp>
        {children}
      </AntdApp>
    </ConfigProvider>
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      <AntdThemeSync>
        {children}
      </AntdThemeSync>
    </NextThemesProvider>
  );
}
