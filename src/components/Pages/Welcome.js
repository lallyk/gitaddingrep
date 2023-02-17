import { NavLink } from "react-router-dom";
import classes from "./Welcome.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/AuthReducer";

const Welcome = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <div className={classes.h1}>
        <h2>Welcome To Expense Tracker</h2>
        <h2>Your profile is incomplete</h2>
        <h2>
          <nav>
            <NavLink activeClassName={classes.active} to="/profile">
              Complete Now
            </NavLink>
          </nav>
        </h2>
      </div>
      <div className={classes.page}>
        <nav>
          <NavLink activeClassName={classes.active} to="/verify">
            Verify Email
          </NavLink>
        </nav>
        <nav>
          <NavLink activeClassName={classes.active} to="/expenses">
            Expenses
          </NavLink>
        </nav>
        <nav>
          <NavLink
            activeClassName={classes.active}
            to="/logout"
            onClick={logoutHandler}
          >
            LOGOUT
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
export default Welcome;
