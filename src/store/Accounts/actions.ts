import { v4 } from "uuid";

type TActionTypes =
  | "SET_ACCOUNT_TO_INACTIVE"
  | "SET_ACCOUNT_TO_ACTIVE"
  | "CREATE_ACCOUNT"
  | "DELETE_ACTIVE_ACCOUNT";

export interface TAction {
  payload: any;
  type: TActionTypes;
}

export const setToInactive = (id: string | number): TAction => ({
  payload: id,
  type: "SET_ACCOUNT_TO_INACTIVE",
});

export const setToActive = (id: string | number): TAction => ({
  payload: id,
  type: "SET_ACCOUNT_TO_ACTIVE",
});

export const createAccount = (name: string, descr: string) => ({
  payload: {
    name,
    description: descr,
    id: v4(),
  },
  type: "CREATE_ACCOUNT",
});

export const deleteActiveAccount = (id: string | number): TAction => ({
  payload: id,
  type: "DELETE_ACTIVE_ACCOUNT",
});
