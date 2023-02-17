import classes from "./Expenses.module.css";
import React, { useRef, useState } from "react";
import ExpenseData from "./ExpensesData";
import { useDispatch, useSelector } from "react-redux";
//import { authActions } from "../Store/AuthReducer";
import { expenseActions } from "../../Store/ExpenseReducer";
import Premium from "./Premium";
import { CSVLink } from "react-csv";
import { addExpneses, editExpense } from "../../Store/ExpenseAction";

const Expenses = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const data1 = useSelector((state) => state.expense.expenses);
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense.expenses);
  const [isEditing, setIsEditing] = useState(false);
  const [needToEditItem, setNeedToEditItem] = useState([]);
  let totalAmount = 0;
  totalAmount = expense?.reduce((ack, item) => {
    return (ack += Number(item.enteredAmount));
  }, 0);

  //console.log(needToEditItem);
  const temp = [needToEditItem];
  console.log(temp);
  const submitHandler = (event) => {
    event.preventDefault();
    if (isEditing) {
      temp.amount = amount;
      temp.description = description;
      temp.category = category;
      const obj = {
        enteredAmount: amount,
        enteredDescription: description,
        enteredCategory: category,
      };
      dispatch(editExpense(needToEditItem.id, obj));
      setIsEditing(false);
      event.target.reset();
      setNeedToEditItem("");
    } else {
      const obj = {
        enteredAmount: amount,
        enteredDescription: description,
        enteredCategory: category,
      };
      dispatch(addExpneses(obj));
      event.target.reset();
    }
    // console.log(obj);
  };
  const editHandler = (editItem) => {
    // console.log(editItem);
    setNeedToEditItem(editItem);
    setIsEditing(true);
  };
  const showExpenses = expense.map((item, index) => {
    return (
      <ExpenseData
        key={Math.random()}
        id={item.id}
        amount={item.enteredAmount}
        description={item.enteredDescription}
        category={item.enteredCategory}
        onEdit={editHandler}
      />
    );
  });

  return (
    <div>
      <div>{totalAmount >= 1000 ? <Premium /> : <></>}</div>
      <form className={classes.exp} onSubmit={submitHandler}>
        <label htmlFor="amount">Amount: </label>

        <input
          type="number"
          defaultValue={needToEditItem.amount || ""}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          defaultValue={needToEditItem.description || ""}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="category">Category:</label>
        <select
          defaultValue={needToEditItem.category || ""}
          onChange={(e) => setCategory(e.target.value)}
        >
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
