import { combineReducers } from "redux";
import { booksReducer } from "./Books/reducer";

const rootReducer = combineReducers({ books: booksReducer });

export { rootReducer };
