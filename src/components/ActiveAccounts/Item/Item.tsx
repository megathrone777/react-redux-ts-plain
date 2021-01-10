import React from "react";
import { useDispatch } from "react-redux";

import { TAccount, setToActive, deleteActiveAccount } from "~/store/Accounts";
import { StyledCell } from "./styled";

interface TProps extends TAccount {}

const Item: React.FC<TProps> = ({ id, name, description }) => {
  const dispatch = useDispatch();

  const handleActive = (id: string | number): void => {
    dispatch(setToActive(id));
  };

  const handleDelete = (id: string | number): void => {
    dispatch(deleteActiveAccount(id));
  };

  return (
    <>
      <StyledCell>{id}</StyledCell>
      <StyledCell>{name}</StyledCell>
      <StyledCell>{description}</StyledCell>
      <StyledCell>
        <button onClick={() => handleActive(id)} type="button">
          Make inactive
        </button>
        <button onClick={() => handleDelete(id)} type="button">
          Delete
        </button>
      </StyledCell>
    </>
  );
};

export { Item };
