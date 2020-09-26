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

const styleVal = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
};

type FlexProps = {
  justify?: keyof typeof styleVal;
  align?: keyof typeof styleVal;
  gap?: keyof typeof gapSet;
  center?: boolean;
};

export const Flex = styled.div<FlexProps>`
  ${({ justify, align, gap, center }) => css`
    display: flex;
    justify-content: ${justify && styleVal[justify]};
    justify-content: ${center && styleVal.center};
    align-items: ${align && styleVal[align]};
    align-items: ${center && styleVal.center};

    > * {
      margin: 0 ${gap && gapSet[gap]}px;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
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
