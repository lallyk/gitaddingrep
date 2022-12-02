import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <nav>
        <Link to="/signup">signUp</Link>
      </nav>
    </Fragment>
  );
};
export default Header;
