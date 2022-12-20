import { createSlice } from "@reduxjs/toolkit";
const UiSlice = createSlice({
  name: "ui",
  initialState: { isCartOpen: false },
  reducers: {
    toggle(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const UiActions = UiSlice.actions;
export default UiSlice;
