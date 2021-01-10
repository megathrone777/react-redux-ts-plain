import React from "react";

import { TAccount } from "~/store/Accounts";
import { StyledCell } from "./styled";

interface TProps extends TAccount {}

const Item: React.FC<TProps> = ({ id, name, description }) => (
  <>
    <StyledCell>{id}</StyledCell>
    <StyledCell>{name}</StyledCell>
    <StyledCell>{description}</StyledCell>
    <StyledCell>
      <button type="button">Make active</button>
      <button type="button">Delete</button>
    </StyledCell>
  </>
);

export { Item };
