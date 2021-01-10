import { combineReducers } from "redux";
import { accountsReducer } from "./Accounts/reducer";

const rootReducer = combineReducers({ accounts: accountsReducer });

export { rootReducer };
