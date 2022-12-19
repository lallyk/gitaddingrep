import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterinitialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: counterinitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
/*const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 5,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 5,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};*/
const authinitialstate = { isAuthenticated: false };
const AuthSlice = createSlice({
  name: "authentication",
  initialState: authinitialstate,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const AuthActions = AuthSlice.actions;
/*const counterSubscriber = () => {
  const latestState = state.getState();
  console.log(latestState);
}; 
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });*/
export default store;
