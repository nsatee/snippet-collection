import styled, { css } from "styled-components";

enum gapSet {
  xs = 4,
  s = 8,
  m = 12,
  l = 16,
  xl = 24,
  xxl = 32,
}

type total =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

type GridProps = {
  gap?: keyof typeof gapSet;
  col?: total;
  row?: total;
  center?: boolean;
  fullH?: boolean;
  fullW?: boolean;
};

const Grid = styled.div<GridProps>`
  ${({ gap, col, row, center, fullH, fullW }) => css`
    display: grid;
    grid-gap: ${gap && gapSet[gap]}px;
    grid-template-columns: ${col && `repeat(${col}, 1fr)`};
    grid-template-row: ${row && `repeat(${row}, 1fr)`};
    place-items: ${center && "center"};
    width: ${fullW && "100vw"};
    height: ${fullH && "100vh"};
  `}
`;

enum STYLE_VALUE {
  center = "center",
  start = "flex-start",
  end = "flex-end",
  around = "space-around",
  between = "space-between",
}

type FlexProps = {
  justify?: keyof typeof STYLE_VALUE;
  align?: keyof typeof STYLE_VALUE;
  gap?: keyof typeof gapSet;
  center?: boolean;
  direction?: "column" | "row";
  flex?: string;
  wrap?: boolean;
};

export const Flex = styled.div<FlexProps>`
  ${({ justify, align, gap, center, direction, flex, wrap }) => css`
    display: flex;
    flex-wrap: ${wrap && "wrap"};
    justify-content: ${justify && STYLE_VALUE[justify]};
    justify-content: ${center && STYLE_VALUE.center};
    align-items: ${align && STYLE_VALUE[align]};
    align-items: ${center && STYLE_VALUE.center};
    flex-direction: ${direction && "column"};
    flex: ${flex && flex};

    > * {
      margin: ${gap && direction !== "column"
        ? `0 ${gapSet[gap]}px`
        : gap && `${gapSet[gap]}px 0`};

      &:first-child {
        margin-left: 0;
        margin-top: 0;
      }
      &:last-child {
        margin-right: 0;
        margin-bottom: 0;
      }
    }
  `}
`;

export const MainContainer = styled.div<{ direction?: "row" | "column" }>`
  ${({ direction = "column" }) => css`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: ${direction};
  `}
`;

export default Grid;
