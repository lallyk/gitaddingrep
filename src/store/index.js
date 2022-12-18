import { createStore } from "redux";
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 5,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 5,
    };
  }
  return state;
};
const store = createStore(counterReducer);
/*const counterSubscriber = () => {
  const latestState = state.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });*/
export default store;
