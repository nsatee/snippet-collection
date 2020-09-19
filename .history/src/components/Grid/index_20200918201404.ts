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
};

const Grid = styled.div<GridProps>`
  ${({ gap, col, row, center }) => css`
    display: grid;
    grid-gap: ${gap && gapSet[gap]}px;
    grid-template-columns: repeat(${col && col}, 1fr);
    grid-template-row: repeat(${row && row}, 1fr);
    place-items: ${center && "center"};
  `}
`;

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export default Grid;
