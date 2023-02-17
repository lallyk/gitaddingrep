import classes from "./ContactUs.module.css";
import React, { useRef } from "react";

const ContactUs = () => {
  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: name.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
    };

    fetch(
      "https://expense-tracker-5dc05-default-rtdb.firebaseio.com//userForm.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    name.current.value = "";
    email.current.value = "";
    phoneNumber.current.value = "";
  };

  return (
    <div className={classes.contact}>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={name} />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={email} />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="text" ref={phoneNumber} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
