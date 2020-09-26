import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./elements/Theme";
import { GlobalStyled } from "./globalStyle";
import Routes from "./Routes";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Routes />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
