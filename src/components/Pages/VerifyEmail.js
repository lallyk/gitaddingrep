import React, { useRef, useContext } from "react";
import AuthContext from "../../Store/AuthContext";
//import classes from "./VerifyEmail.module.css";
const VerifyEmail = () => {
  const authCtx = useContext(AuthContext);
  const VerifyHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBjJ44Hszfv0so33A_8ChkkCK1c5iRnFOU",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: authCtx.tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(error.message);
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <button onClick={VerifyHandler}>Verify Email</button>
    </div>
  );
};
export default VerifyEmail;
