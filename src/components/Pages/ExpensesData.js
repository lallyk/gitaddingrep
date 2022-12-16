import React from "react";
//import AuthContext from "../Store/AuthContext";
import classes from "./ExpenseData.module.css";

const ExpenseData = (props) => {
  console.log(props.id);
  //const dispatch=useDispatch()

  //const deleteHandler=()=>{
  //dispatch(expenseActions.deleteExpenses(props.id))
  //}

  return (
    <div className={classes.expense}>
      <h3>{props.amount}</h3>
      <h3>{props.description}</h3>
      <h3>{props.category}</h3>
      <button style={{ color: "black" }}>Edit</button>
      <button style={{ color: "red" }}>Delete</button>
    </div>
  );
};

export default ExpenseData;
