import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default Header;
