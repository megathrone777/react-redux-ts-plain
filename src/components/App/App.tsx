import React from "react";

import { ThemeProvider, theme } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";
import { StyledWrapper } from "./styled";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>App</StyledWrapper>
  </ThemeProvider>
);

export { App };
