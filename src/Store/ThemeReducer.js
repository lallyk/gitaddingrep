import { createSlice } from "@reduxjs/toolkit";

const ThemeReducer = createSlice({
  name: "theme",
  initialState: {
    toggle: true,
  },
  reducers: {
    togglefun(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const themeActions = ThemeReducer.actions;
export default ThemeReducer.reducer;
