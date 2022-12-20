import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./uiReducer";
import cartSlice from "./CartReducer";
const store = configureStore({
  reducer: {
    UI: UiSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
