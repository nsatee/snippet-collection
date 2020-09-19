import chroma from "chroma-js";

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
      light: chroma("#4582CE").brighten(1).css(),
      base: "#4582CE",
      dark: chroma("#4582CE").darken(2).css(),
    },
    secondary: {
      light: chroma("#4582CE").brighten(0.2).css(),
      base: "#4582CE",
      dark: chroma("#4582CE").darken(2).css(),
    },
    error: {
      light: chroma("#F55D51").brighten(0.2).css(),
      base: "#F55D51",
      dark: chroma("#F55D51").darken(2).css(),
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
export type ThemeType = keyof typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
