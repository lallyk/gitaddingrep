import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
//import About from "../../About/About";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <NavLink activeClassName={classes.active} to="/home">
            HOME
          </NavLink>
          <NavLink activeClassName={classes.active} to="/about">
            ABOUT
          </NavLink>
          <NavLink activeClassName={classes.active} to="/contact">
            CONTACT US
          </NavLink>
        </nav>
        <h3>Store</h3>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.generics}>
        <h1>The Generics</h1>
      </div>
    </Fragment>
  );
};

export default Header;
