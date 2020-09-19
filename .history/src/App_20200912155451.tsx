import React from "react";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import "./App.css";
import Badge from "./components/Badge";

import Button from "./components/Button";
import { theme } from "./components/Theme/Color";
import Grid from "./components/Grid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyled />
        <Grid center col="5" gap="m">
          <Button>Hello</Button>
          <Button color="secondary">Hello</Button>
          <Button color="error">Hello</Button>
          <Button color="success">Hello</Button>
          <Button color="gray">Hello</Button>
          <Button disabled>Hello</Button>
          <Button disabled color="secondary">
            Hello
          </Button>
          <Button disabled color="error">
            Hello
          </Button>
          <Button disabled color="success">
            Hello
          </Button>
          <Button disabled color="gray">
            Hello
          </Button>
          <Button display="bordered">Hello</Button>
          <Button display="bordered" color="secondary">
            Hello
          </Button>
          <Button display="bordered" color="error">
            Hello
          </Button>
          <Button display="bordered" color="success">
            Hello
          </Button>
          <Button display="bordered" color="gray">
            Hello
          </Button>
          <Button display="ghost">Hello</Button>
          <Button display="ghost" color="secondary">
            Hello
          </Button>
          <Button display="ghost" color="error">
            Hello
          </Button>
          <Button display="ghost" color="success">
            Hello
          </Button>
          <Button display="ghost" color="gray">
            Hello
          </Button>
          <Badge text="1235">
            <Button>Hello</Button>
          </Badge>
        </Grid>
        <Grid row="3" center gap="l" style={{ marginTop: 24 }}>
          <Button dimension="l">Hello</Button>
          <Button dimension="m">Hello</Button>
          <Button dimension="s">Hello</Button>
        </Grid>
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
