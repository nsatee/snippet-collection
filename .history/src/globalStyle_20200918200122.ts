import { createGlobalStyle, css } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${({ theme }) => css`
  body {
    background: ${theme.background.base};
  }
`}
`;
