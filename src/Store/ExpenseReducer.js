import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
  },
  reducers: {
    replaceExpense(state, action) {
      //console.log(action.payload);
      state.expenses = action.payload;
    },
    addExpense(state, action) {
      state.expenses = [...state.expenses, action.payload];
      //state.changed = true;
    },
    deleteExpenses(state, action) {
      const id = action.payload;
      const newArr = [...state.expenses];
      newArr.forEach((item, index) => {
        if (item.id === id) {
          newArr.splice(index, 1);
        }
      });
      state.expenses = newArr;
    },
    editExpenses(state, action) {
      const id = action.payload.id;
      console.log(id);
      const newArr = [...state.expenses];
      newArr.forEach((item, index) => {
        if (item.id === id) {
          newArr.splice(index, 1);
          state.expenses = [...newArr, action.payload.obj];
        }
      });
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
