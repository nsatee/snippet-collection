import { createGlobalStyle, css } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
    letter-spacing: 0.11em;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background: ${theme.colors.background.base};
  }
`}
`;
