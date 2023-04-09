import React, { useRef} from "react";
//import axios from "axios";
const LoginForm=()=>{
  const email1=useRef();
  const password1=useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const email = email1.current.value;
    const password = password1.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjJ44Hszfv0so33A_8ChkkCK1c5iRnFOU" ,{
    method: "POST",  
    body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response=>alert(response.data)).catch(err=>alert(err));
  }
    
  return(
    <div>
      <center>
      <input type="email" placeholder="Enter Mail" ref={email1} /> <br />
      <input type="password" placeholder="Enter Password" ref={password1} /> <br />
      <button onSubmit={submitHandler}>Submit</button></center>
    </div>
  )
}
export default LoginForm;
    