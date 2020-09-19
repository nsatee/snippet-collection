import { createGlobalStyle, css } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.background.base};
  }
`}
`;
