import { thunk } from "redux-thunk";
import { authReducer } from "./reducer/auth.reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

export const reducer = combineReducers({ auth: authReducer });
export const store = createStore(reducer, {}, applyMiddleware(thunk));
