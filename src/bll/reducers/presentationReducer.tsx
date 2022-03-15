import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Navigation } from "../../consts/routes";

type PresentationState = {
  theme: Navigation | null;
};
export const initialState: PresentationState = {
  theme: null,
};

const presentationSlice = createSlice({
  name: "presentation",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Navigation>) => {
      state.theme = action.payload;
    }
  },
});

export const presentationActions = presentationSlice.actions;
export const presentationReducer = presentationSlice.reducer;
