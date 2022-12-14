import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.h1}>
      <h2>Welcome To Expense Tracker</h2>
      <h2>Your profile is incomplete</h2>
      <h2>
        <nav>
          <Link to="/update">Complete Now</Link>
        </nav>
      </h2>
    </div>
  );
};
export default Welcome;
