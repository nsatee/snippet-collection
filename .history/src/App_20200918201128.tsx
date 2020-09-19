import React from "react";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import Badge from "./components/Badge";

import Button from "./components/Button";
import { theme } from "./components/Theme/Color";
import Grid from "./components/Grid";
import { GlobalStyled } from "./globalStyle";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
