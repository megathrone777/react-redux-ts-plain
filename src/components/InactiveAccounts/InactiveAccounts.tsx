import React from "react";
import { useSelector } from "react-redux";

import { TAccount } from "~/store/Accounts";
import { TState } from "~/store/initialState";
import { Item } from "./Item";
import {
  StyledWrapper,
  StyledTable,
  StyledThead,
  StyledRow,
  StyledCell,
} from "./styled";

const InactiveAccounts: React.FC = () => {
  const inactiveAccounts = useSelector(
    ({ accounts }: TState) => accounts.inactiveAccounts
  );

  return (
    <StyledWrapper>
      {inactiveAccounts && !!inactiveAccounts.length ? (
        <StyledTable>
          <StyledThead>
            <StyledRow>
              <StyledCell>ID</StyledCell>
              <StyledCell>Name</StyledCell>
              <StyledCell>Description</StyledCell>
              <StyledCell>Options</StyledCell>
            </StyledRow>
          </StyledThead>
          <tbody>
            {inactiveAccounts.map(
              ({ id, name, description }: TAccount): React.ReactElement => (
                <StyledRow key={id}>
                  <Item id={id} name={name} description={description} />
                </StyledRow>
              )
            )}
          </tbody>
        </StyledTable>
      ) : (
        <p>No inactive accounts.</p>
      )}
    </StyledWrapper>
  );
};

export { InactiveAccounts };
