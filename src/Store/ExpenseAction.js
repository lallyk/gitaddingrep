import axios from "axios";
import { expenseActions } from "./ExpenseReducer";

const useEmail = localStorage.getItem("email")?.split("@").join("");
const cleanEmail = useEmail?.split(".").join("");

export const fetchExpneses = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://expensetracker-main-default-rtdb.firebaseio.com/${cleanEmail}.json`
      );
      if (res.request.status === 200) {
        let loadedExpenses = [];
        for (let key in res.data) {
          loadedExpenses.push({
            id: key,
            enteredAmount: res.data[key].enteredAmount,
            enteredCategory: res.data[key].enteredCategory,
            enteredDescription: res.data[key].enteredDescription,
          });
        }
        dispatch(expenseActions.replaceExpense(loadedExpenses));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addExpneses = (obj) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `https://expensetracker-main-default-rtdb.firebaseio.com/${cleanEmail}.json`,
        obj
      );
      if (res.status === 200) {
        const temp = { ...obj, id: res.data.name };
        console.log(temp);
        dispatch(expenseActions.addExpense(temp));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExpense = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `https://expensetracker-main-default-rtdb.firebaseio.com/${cleanEmail}/${id}.json`
      );
      if (res.status === 200) {
        console.log(res.data);
        dispatch(expenseActions.deleteExpenses(id));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editExpense = (id, obj) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `https://expensetracker-main-default-rtdb.firebaseio.com/${cleanEmail}/${id}.json`,
        obj
      );
      if (res.status === 200) {
        console.log(res.data);
        const temp = { id: id, obj: obj };
        dispatch(expenseActions.editExpenses(temp));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
