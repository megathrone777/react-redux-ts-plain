import React from "react";

import { ThemeProvider, theme } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";
import { ActiveAccounts } from "~/components/ActiveAccounts";
import { InactiveAccounts } from "~/components/InactiveAccounts";
import { CreateAccount } from "~/components/CreateAccount";
import { StyledWrapper, StyledCol, StyledColTitle } from "./styled";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>
      <StyledCol>
        <StyledColTitle>Active accounts</StyledColTitle>
        <ActiveAccounts />
      </StyledCol>

      <StyledCol>
        <StyledColTitle>Inactive accounts</StyledColTitle>
        <InactiveAccounts />
      </StyledCol>
    </StyledWrapper>

    <CreateAccount />
  </ThemeProvider>
);

export { App };
