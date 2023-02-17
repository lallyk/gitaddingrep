import { Fragment } from "react";
import React, { useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";
import loginContext from "../../Store/login-context";

const Header = (props) => {
  const loginCtx = useContext(loginContext);
  const logoutHandler = () => {
    loginCtx.logout();
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <NavLink activeClassName={classes.active} to="/">
            HOME
          </NavLink>
          <NavLink activeClassName={classes.active} to="/about">
            ABOUT
          </NavLink>
          <NavLink activeClassName={classes.active} to="/contact">
            CONTACT US
          </NavLink>
          <NavLink activeClassName={classes.active} to="/products">
            PRODUCTS
          </NavLink>
          <NavLink activeClassName={classes.active} to="/login">
            LOGIN
          </NavLink>
        </nav>
        <HeaderCartButton onClick={props.onShowCart} />
        <button onClick={logoutHandler}>LOGOUT</button>
      </header>
      <div className={classes.generics}>
        <h1>The Generics</h1>
      </div>
    </Fragment>
  );
};

export default Header;
