import { createGlobalStyle, css } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
    letter-spacing: 0.12em;
  }
  body {
    background: ${theme.colors.background.base};
  }
`}
`;
