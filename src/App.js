import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";
//import { Col, Row, Container } from "react-bootstrap";
//import Form from "react-bootstrap/Form";
import React from "react";
import Welcom from "./components/Welcome";
function App() {
  //const islogin = useSelector((state) => state.uiauth.islogin);
  //const Dispatch = useDispatch();
  return (
    <div>
      <div>
        <SignUp />
      </div>
    </div>
  );
}

export default App;
