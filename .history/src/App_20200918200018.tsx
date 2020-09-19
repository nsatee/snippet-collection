import React from "react";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import Badge from "./components/Badge";

import Button from "./components/Button";
import { theme } from "./components/Theme/Color";
import Grid from "./components/Grid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyled />
      </div>
    </ThemeProvider>
  );
}

export const GlobalStyled = createGlobalStyle`
${({ theme }) => css`
  body {
    background: ${theme.background.base};
  }
`}
`;

export default App;
