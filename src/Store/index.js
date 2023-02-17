import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthReducer";
import expenseSlice from "./ExpenseReducer";
import ThemeReducer from "./ThemeReducer";
//import themeSlice from "./ThemeReducer";

const store = configureStore({
  reducer: {
    auth: authSlice,
    expense: expenseSlice,
    theme: ThemeReducer,
  },
});
export default store;
