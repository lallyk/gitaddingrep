import { createSlice } from "@reduxjs/toolkit";

const intialToken = localStorage.getItem("idToken");
const intialEmail = localStorage.getItem("email");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: !!intialToken,
    token: intialToken,
    email: intialEmail,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.idToken;
      state.email = action.payload.email;
      state.isLoggedIn = !!action.payload.idToken;
      localStorage.setItem("idToken", action.payload.idToken);
      localStorage.setItem("email", action.payload.email);
    },
    logout(state, action) {
      state.token = null;
      state.email = null;
      state.isLoggedIn = false;
      localStorage.removeItem("idToken");
      localStorage.removeItem("email");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
