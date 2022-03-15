import { combineReducers, createStore } from "@reduxjs/toolkit";
import { presentationReducer } from "./reducers/presentationReducer";

const rootReducer = combineReducers({
  presentation: presentationReducer,
});
type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>;

export const store = createStore(rootReducer);
