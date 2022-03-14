import { combineReducers, createStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

})
type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>

export const store = createStore(rootReducer)
