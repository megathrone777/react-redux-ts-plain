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

const ActiveAccounts: React.FC = () => {
  const activeAccounts = useSelector(
    ({ accounts }: TState) => accounts.activeAccounts
  );

  return (
    <StyledWrapper>
      {activeAccounts && !!activeAccounts.length ? (
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
            {activeAccounts.map(
              ({ id, name, description }: TAccount): React.ReactElement => (
                <StyledRow key={id}>
                  <Item id={id} name={name} description={description} />
                </StyledRow>
              )
            )}
          </tbody>
        </StyledTable>
      ) : (
        <p>No active accounts.</p>
      )}
    </StyledWrapper>
  );
};

export { ActiveAccounts };
