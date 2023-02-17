//import React, { useContext } from "react";
//import AuthContext from "../../Store/AuthContext";
import classes from "./VerifyEmail.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
const VerifyEmail = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const VerifyHandler = async () => {
    //event.preventDefault();
    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBjJ44Hszfv0so33A_8ChkkCK1c5iRnFOU",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resp);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className={classes.verify}>
      <button onClick={VerifyHandler}>
        <h1>Verify Email</h1>
      </button>
    </div>
  );
};
export default VerifyEmail;
