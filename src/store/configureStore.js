import { createStore } from "redux";
import rootReducer from "../reducers";
import { loadState } from "../localStorage";

export const persistedState = loadState();

export function configureStore(persistedState) {
  return createStore(rootReducer, persistedState);
}
