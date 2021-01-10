import { TAction } from "./actions";
import { initialState, TAccountsState } from "./initialState";

const accountsReducer: React.Reducer<TAccountsState, TAction> = (
  state = initialState,
  action
): TAccountsState => {
  const { payload, type } = action;

  const actions = {
    SET_ACCOUNT_TO_INACTIVE: () => {
      const activeAccounts = [...state.activeAccounts].filter(
        // НАЙТИ ПО ИД И УДАЛИТЬ АККАУНТ ИЗ АКТИВНЫХ
        (account) => account.id !== payload
      );

      const newInactiveAccount = [...state.activeAccounts].find(
        // НАЙТИ ПО ИД И ДОБАВИТЬ АККАУНТ В НЕАКТИВНЫЕ
        (account) => account.id === payload
      );

      return {
        ...state,
        activeAccounts,
        inactiveAccounts: [...state.inactiveAccounts, newInactiveAccount],
      };
    },

    SET_ACCOUNT_TO_ACTIVE: () => {
      console.log(payload)
      const inactiveAccounts = [...state.inactiveAccounts].filter(
        (account) => account.id !== payload
      );

      const newActiveAccount = [...state.inactiveAccounts].find(
        (account) => account.id === payload
      );

      return {
        ...state,
        inactiveAccounts,
        activeAccounts: [...state.activeAccounts, newActiveAccount],
      };
    },

    CREATE_ACCOUNT: () => ({
      ...state,
      activeAccounts: [...state.activeAccounts, payload],
    }),

    DELETE_ACTIVE_ACCOUNT: () => {
      const newActiveAccounts = [...state.activeAccounts].filter(
        // НАЙТИ ПО ИД И УДАЛИТЬ АККАУНТ ИЗ АКТИВНЫХ
        (account) => account.id !== payload
      );

      return {
        ...state,
        activeAccounts: newActiveAccounts,
      };
    },

    DEFAULT: () => state,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { accountsReducer };
