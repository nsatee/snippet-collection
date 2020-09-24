import { colors } from "./colors";
import chroma from "chroma-js";
import { boxModel } from "./spacing";

export const theme = {
  colors,
  boxModel,
} as const;

type Theme = typeof theme;
export type ThemeType = keyof typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const incNum = ({
  max,
  step = 11,
}: {
  total?: number;
  max: number;
  step?: number;
}) => {
  const inc = max / (step - 1);
  return Array.from(Array(step), (_, index) =>
    parseFloat((inc * index).toFixed(2))
  );
};

export const setColor = (color: string) => {
  return {
    brighten: incNum({ max: 3 }).map((value) =>
      chroma(color).brighten(value).hex()
    ),
    darken: incNum({ max: 3 }).map((value) =>
      chroma(color).darken(value).hex()
    ),
    alpha: incNum({ max: 1 }).map((value) => chroma(color).alpha(value).css()),
    saturate: incNum({ max: 3 }).map((value) =>
      chroma(color).saturate(value).hex()
    ),
    desaturate: incNum({ max: 3 }).map((value) =>
      chroma(color).desaturate(value).hex()
    ),
  };
};

export const textColor = (
  color: string,
  dark: string = colors.foreground,
  light: string = colors.background
) => {
  const [r, b, g] = chroma(color).rgb();
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? dark : light;
};
