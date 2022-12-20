import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./Login.module.css";
import loginContext from "../../Store/login-context";

const Login = () => {
  const [loginAccount, setCreateAccount] = useState(true);
  const history = useHistory();
  const loginCtx = useContext(loginContext);
  const email = useRef();
  const password = useRef();

  const createAccountHandler = () => {
    setCreateAccount((previousState) => {
      return !previousState;
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    let url;

    if (loginAccount) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsSpWrk2F5iyWN5UnDbxQ73HSZ-UxOW5s";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsSpWrk2F5iyWN5UnDbxQ73HSZ-UxOW5s ";
    }
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        history.replace("/products");
        const convertedData = JSON.stringify(data);
        localStorage.setItem("tokenId", convertedData);
        loginCtx.login(data);
      } else {
        throw new Error(data.error.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={loginHandler}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={email} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={password} />
        <div>
          <button type="submit">
            {loginAccount ? "Login" : "Create Account"}
          </button>
        </div>
        <p onClick={createAccountHandler}>
          {loginAccount
            ? "Create a new Account"
            : "Login with existing account"}
        </p>
      </form>
    </div>
  );
};

export default Login;
