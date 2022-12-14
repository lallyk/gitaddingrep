import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";
import React, { useContext } from "react";
import AuthContext from "../../Store/AuthContext";

const Welcome = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div className={classes.h1}>
      <h2>Welcome To Expense Tracker</h2>
      <h2>Your profile is incomplete</h2>
      <h2>
        <nav>
          <Link to="/update">Complete Now</Link>
        </nav>
      </h2>
      <nav>
        <Link to="/logout">LOGOUT</Link>
      </nav>
    </div>
  );
};
export default Welcome;
