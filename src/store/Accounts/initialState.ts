import { v4 } from "uuid";

interface TAccount {
  id: string | number;
  name: string;
  description: string;
}

interface TAccountsState {
  activeAccounts: TAccount[];
  inactiveAccounts: TAccount[];
}

const initialState: TAccountsState = {
  activeAccounts: [
    {
      id: v4(),
      name: "First account",
      description: "First account descr",
    },
    {
      id: v4(),
      name: "Next account",
      description: "Next account descr",
    },
    {
      id: v4(),
      name: "Next next account",
      description: "Next next account descr",
    },
  ],
  inactiveAccounts: [],
};

export { initialState, TAccountsState, TAccount };
