import classes from "./Expenses.module.css";
import React, { useRef } from "react";
import ExpenseData from "./ExpensesData";
import { useDispatch, useSelector } from "react-redux";
//import { authActions } from "../Store/AuthReducer";
import { expenseActions } from "../../Store/ExpenseReducer";
import Premium from "./Premium";
import { CSVLink } from "react-csv";

const Expenses = () => {
  const amount = useRef();
  const description = useRef();
  const category = useRef();
  const data1 = useSelector((state) => state.expense.expenses);
  //const location = useNavigate();
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense.expenses);

  let totalAmount = 0;
  totalAmount = expense?.reduce((ack, item) => {
    return (ack += Number(item.enteredAmount));
  }, 0);

  console.log(totalAmount);

  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      enteredAmount: amount.current.value,
      enteredDescription: description.current.value,
      enteredCategory: category.current.value,
    };
    dispatch(expenseActions.addExpense(obj));
  };

  const showExpenses = expense.map((item, index) => {
    return (
      <ExpenseData
        key={Math.random()}
        id={index}
        amount={item.enteredAmount}
        description={item.enteredDescription}
        category={item.enteredCategory}
      />
    );
  });

  return (
    <div>
      <div>{totalAmount >= 1000 ? <Premium /> : <></>}</div>
      <form className={classes.exp} onSubmit={submitHandler}>
        <label htmlFor="amount">Amount: </label>

        <input type="number" ref={amount} required />

        <label htmlFor="description">Description:</label>
        <input type="text" ref={description} required />

        <label htmlFor="category" ref={category}>
          Category:
        </label>
        <select>
          <option value="Fuel">Fuel</option>
          <option value="Food">Food</option>
          <option value="shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <input type="submit" value="Add Expense" />
      </form>
      <div style={{ marginLeft: "45%" }}>
        {totalAmount >= 1000 && (
          <button>
            <CSVLink filename={"Expenses"} data={data1}>
              Dounload all your Expenses
            </CSVLink>
          </button>
        )}
      </div>
      <div>{showExpenses}</div>
    </div>
  );
};
export default Expenses;
