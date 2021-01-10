import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createAccount } from "~/store/Accounts";
import { StyledForm } from "./styled";

const CreateAccount: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [descr, setDescr] = useState<string>("");

  const handleName = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const handleDescr = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    setDescr(event.currentTarget.value);
  };

  const handleCreate = (): void => {
    dispatch(createAccount(name, descr));
    setName("");
    setDescr("");
  };

  return (
    <StyledForm method="POST" action="#">
      <legend>Create account</legend>
      <div>
        <input
          onChange={handleName}
          placeholder="Name"
          type="text"
          value={name}
        />
      </div>
      <div>
        <input
          onChange={handleDescr}
          placeholder="Description"
          type="text"
          value={descr}
        />
      </div>
      <button onClick={handleCreate} type="button">
        Create account
      </button>
    </StyledForm>
  );
};

export { CreateAccount };
