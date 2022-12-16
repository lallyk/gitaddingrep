import React from "react";
//import AuthContext from "../Store/AuthContext";
import classes from "./ExpenseData.module.css";
import axios from "axios";

const ExpenseData = (props) => {
  console.log(props.id);
  //const dispatch=useDispatch()

  //const deleteHandler=()=>{
  //dispatch(expenseActions.deleteExpenses(props.id))
  //}
  const deleteHandler = () => {
    return async (dispatch) => {
      const getData = async () => {
        const response = await axios.delete(
          "https://expensetracker-main-default-rtdb.firebaseio.com/expenses/-NJOOyRfmU8xoZBtd8cf.json"
        );
        const data = await response.data;
        console.log(data);
        return data;
      };
    };
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
      <button style={{ color: "black" }} onClick={deleteHandler}>
        Delete
      </button>
      <button style={{ color: "red" }} onClick={editHandler}>
        Edit
      </button>
    </div>
  );
};

export default ExpenseData;
