import classes from "./Expenses.module.css";
import React, { useRef } from "react";
import ExpenseData from "./ExpensesData";
const Expenses = () => {
  const amount = useRef();
  const description = useRef();
  const category = useRef();

  const productsArr = [
    {
      id: "p1",
      amount: 400,
      description: "bike",
      category: "fuel",
    },

    {
      id: "p2",
      amount: 600,
      description: "frock",
      category: "shopping",
    },
  ];
  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      enteredAmount: amount.current.value,
      enteredDescription: description.current.value,
      enteredCategory: category.current.value,
    };
    //dispatch(expenseActions.addExpense(obj));
  };

  const showExpenses = productsArr.map((item, index) => {
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
      <div>{showExpenses}</div>
    </div>
  );
};
export default Expenses;
