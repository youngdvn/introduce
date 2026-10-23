import { ThemeConfig, theme } from "antd";

/**
 * Ant Design v5 Theme Configuration for Dark Mode
 * Matching "Modern Minimal Developer Portfolio" visual identity
 */
export const antDarkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#38BDF8", // Electric Blue
    colorInfo: "#38BDF8",
    colorSuccess: "#10B981",
    colorWarning: "#F59E0B",
    colorError: "#EF4444",
    colorBgBase: "#0A0A0C", // Deep near-black background
    colorBgContainer: "#121216", // Card / Bento container background
    colorBgElevated: "#1A1A22", // Modal / Drawer / Dropdown
    colorBorder: "#23232E", // Subtle borders
    colorBorderSecondary: "#1C1C24",
    colorTextBase: "#F4F4F6", // Soft white primary text
    colorTextSecondary: "#A1A1AA", // Muted gray secondary text
    colorTextTertiary: "#71717A",
    borderRadius: 12,
    fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    Button: {
      controlHeight: 42,
      borderRadius: 10,
      colorPrimaryHover: "#0ea5e9",
      defaultBg: "#121216",
      defaultBorderColor: "#23232E",
      defaultColor: "#F4F4F6",
      defaultHoverBg: "#1A1A22",
      defaultHoverBorderColor: "#38BDF8",
      defaultHoverColor: "#38BDF8",
      fontWeight: 500,
    },
    Card: {
      colorBgContainer: "#121216",
      colorBorderSecondary: "#23232E",
      borderRadiusLG: 16,
    },
    Tag: {
      borderRadiusSM: 6,
      defaultBg: "#1A1A22",
      defaultColor: "#A1A1AA",
    },
    Timeline: {
      itemPaddingBottom: 36,
      dotBorderWidth: 2,
    },
    Input: {
      colorBgContainer: "#16161D",
      colorBorder: "#2B2B38",
      colorText: "#F4F4F6",
      colorTextPlaceholder: "#71717A",
      activeBorderColor: "#38BDF8",
      hoverBorderColor: "#38BDF8",
      borderRadius: 8,
    },
    Drawer: {
      colorBgElevated: "#0A0A0C",
    },
    FloatButton: {
      colorBgElevated: "#121216",
      colorPrimary: "#38BDF8",
    },
  },
};

/**
 * Ant Design v5 Theme Configuration for Light Mode
 */
export const antLightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#0284C7",
    colorInfo: "#0284C7",
    colorSuccess: "#10B981",
    colorWarning: "#F59E0B",
    colorError: "#EF4444",
    colorBgBase: "#FAFAFA",
    colorBgContainer: "#FFFFFF",
    colorBgElevated: "#FFFFFF",
    colorBorder: "#E4E4E7",
    colorBorderSecondary: "#F4F4F5",
    colorTextBase: "#09090B",
    colorTextSecondary: "#52525B",
    colorTextTertiary: "#A1A1AA",
    borderRadius: 12,
    fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    Button: {
      controlHeight: 42,
      borderRadius: 10,
      fontWeight: 500,
    },
    Card: {
      colorBgContainer: "#FFFFFF",
      colorBorderSecondary: "#E4E4E7",
      borderRadiusLG: 16,
    },
    Tag: {
      borderRadiusSM: 6,
    },
    Timeline: {
      itemPaddingBottom: 36,
      dotBorderWidth: 2,
    },
    Input: {
      colorBgContainer: "#FFFFFF",
      colorBorder: "#D4D4D8",
      colorText: "#09090B",
      colorTextPlaceholder: "#71717A",
      activeBorderColor: "#0284C7",
      hoverBorderColor: "#0284C7",
      borderRadius: 8,
    },
    Drawer: {
      colorBgElevated: "#FFFFFF",
    },
    FloatButton: {
      colorBgElevated: "#FFFFFF",
      colorPrimary: "#0284C7",
    },
  },
};
