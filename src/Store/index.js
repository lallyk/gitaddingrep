import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
//import MailSlice from "./MailSlice";
import Uislice from "./Uivisible";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    uiauth: Uislice.reducer,
  },
});
export default store;
