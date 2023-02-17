import React, { useRef, useContext } from "react";
const Forgot = () => {
  const emailInputRef = useRef();
  const ForgotHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBjJ44Hszfv0so33A_8ChkkCK1c5iRnFOU",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: enteredEmail,
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
          throw new Error("not working");
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
    <form onSubmit={ForgotHandler}>
      <div>
        <label htmlFor="email">Enter Email</label>
        <input type="email" required ref={emailInputRef} />
        <button type="submit">SEND LINK</button>
      </div>
    </form>
  );
};
export default Forgot;
