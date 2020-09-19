export const theme = {
  colors: {
    foreground: {
      base: "#272640",
      light: "#272640",
      dark: "#272640",
    },
    background: {
      base: "#ffffff",
      light: "#edf2fb",
      dark: "#e4e8f0",
    },
    primary: {
      light: "#e3f3ff",
      base: "#ccdbff",
      dark: "#5770ad",
    },
    secondary: {
      light: "#edf7ff",
      base: "#d3e3f0",
      dark: "#599ac9",
    },
    error: {
      light: "#f8e5ee",
      base: "#fdbabe",
      dark: "#ec4b52",
    },
    success: {
      light: "#d8f3dc",
      base: "#95d5b2",
      dark: "#40916c",
    },
    gray: {
      light: "#fafafa",
      base: "#d5d5e0",
      dark: "#8a8aa1",
    },
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 20,
    xxl: 24,
    xxl1: 28,
    xxl2: 32,
  },
} as const;

type Theme = typeof theme;
export type ColorsType = keyof typeof theme.colors;
export type SpacingType = keyof typeof theme.spacing;
export type Theme = ColorsType & SpacingType;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
