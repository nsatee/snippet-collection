import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./components/Theme/Color";
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
