import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const presentationState = (state: AppState) => state.presentation;

export const getTheme = createSelector(presentationState, (s) => s.theme);
