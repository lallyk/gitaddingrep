import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import ExpenseImage from "../../assets/expense";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>Expense Tracker</h1>
        <nav>
          <NavLink activeClassName={classes.active} to="/signup">
            signUp
          </NavLink>
        </nav>
      </div>
      <div className={classes["main-image"]}>
        <img src={ExpenseImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
export default Header;
/*<Fragment>
      <nav>
        <Link to="/signup">signUp</Link>
      </nav>
      <nav>
        <Link to="/welcome">Welcome</Link>
      </nav>
      <nav>
        <Link to="/verify">Verify Email</Link>
      </nav>
      <nav>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </Fragment> */
