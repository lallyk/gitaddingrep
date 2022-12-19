import React from "react";
import { useDispatch } from "react-redux";
import { themeActions } from "../../Store/ThemeReducer";
import classes from "./Premium.module.css";

const Premium = () => {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themeActions.togglefun());
  };

  return (
    <div className={classes.actions}>
      <button>Activate Premium</button>
      <button onClick={toggleTheme} style={{ margin: "1rem" }}>
        Change Theme
      </button>
    </div>
  );
};

export default Premium;
