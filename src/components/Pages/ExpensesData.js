import React from "react";
import classes from "./ExpenseData.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../Store/ExpenseReducer";
import { deleteExpense } from "../../Store/ExpenseAction";
import { editExpense } from "../../Store/ExpenseAction";

const ExpenseData = (props) => {
  console.log(props.id);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteExpense(id));
  };

  const editHandler = (item) => {
    props.onEdit(item);
  };

  return (
    <div className={classes.expense}>
      <h3>{props.amount}</h3>
      <h3>{props.description}</h3>
      <h3>{props.category}</h3>
      <button style={{ color: "black" }} onClick={() => editHandler(props)}>
        Edit
      </button>
      <button style={{ color: "red" }} onClick={() => deleteHandler(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default ExpenseData;
/*
import React from "react";
//import AuthContext from "../Store/AuthContext";
import classes from "./ExpenseData.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
//import { expenseActions } from "../Store/ExpenseReducer";
import { expenseActions } from "../../Store/ExpenseReducer";

const ExpenseData = (props) => {
  console.log(props.id);
  const dispatch = useDispatch();

  //const deleteHandler=()=>{
  //dispatch(expenseActions.deleteExpenses(props.id))
  //}
  const deleteHandler = () => {
    return async (dispatch) => {
      const getData = async () => {
        const response = await axios.delete(
          "https://expensetracker-main-default-rtdb.firebaseio.com//expenses.json"
        );
        const data = await response.data;
        console.log(data);
        return data;
      };
    };
    dispatch(expenseActions.deleteExpenses(props.id));
  };
  const editHandler = () => {
    return async (dispatch) => {
      const getData = async () => {
        const response = await axios.put(
          "https://expensetracker-main-default-rtdb.firebaseio.com/expenses/-NJOOyRfmU8xoZBtd8cf.json"
        );
        const data = await response.data;
        console.log(data);
        return data;
      };
    };
  };

  return (
    <div className={classes.expense}>
      <h3>{props.amount}</h3>
      <h3>{props.description}</h3>
      <h3>{props.category}</h3>
      <button style={{ color: "black" }} onClick={editHandler}>
        Edit
      </button>
      <button style={{ color: "red" }} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default ExpenseData;
 */
