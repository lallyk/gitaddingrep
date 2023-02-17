import React from "react";
import { useDispatch } from "react-redux";
import { themeActions } from "../../Store/ThemeReducer";
import classes from "./Premium.module.css";
import { useSelector } from "react-redux";

const Premium = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  let totalAmount = 0;
  totalAmount = expense.expenses?.reduce((ack, item) => {
    return (ack += Number(item.enteredAmount));
  }, 0);
  const toggleTheme = () => {
    dispatch(themeActions.togglefun());
  };

  return (
    <>
      {totalAmount >= 1000 ? (
        <div className={classes.actions}>
          <button>Activate Premium</button>
          <button onClick={toggleTheme} style={{ margin: "1rem" }}>
            Change Theme
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Premium;
