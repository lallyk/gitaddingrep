import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./uiReducer";
const store = configureStore({
  reducer: {
    UI: UiSlice.reducer,
  },
});
export default store;
