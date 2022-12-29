/*import SignUp from "./components/SignUp";
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

export default App;*/
import AuthForm from "./Component/AuthForm/AuthForm";
import TextEditing from "./Component/TextEditing/TextEditing";
import InboxPage from "./Component/InboxPage.js/InboxPage";
import { Route, Navigate, Router } from "react-router-dom";
import SentMessage from "./Component/InboxPage.js/Sentmessage/SentMessage";
import { useEffect } from "react";
import InboxList from "./Component/InboxPage.js/InboxList";
import { useSelector, useDispatch } from "react-redux";
import { UpdateMySentItem } from "./Store/Mail-thunk";
import { useNavigate } from "react-router-dom";

function App() {
  let loginlocalstore = localStorage.getItem("islogin") === "true";
  // console.log(loginlocalstore);
  const navi = useNavigate();
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (loginlocalstore || islogin) {
      navi("/main/text-edit");
      console.log(" navi");
    }
    if (!loginlocalstore) {
      navi("/login");
    }
  }, [loginlocalstore]);

  const sentItem = useSelector((state) => state.mymail.sentItem);
  const sendcount = useSelector((state) => state.mymail.sendcount);
  useEffect(() => {
    Dispatch(UpdateMySentItem(sentItem));
  }, [sendcount]);
  // console.log("app", sentItem);
  return (
    <div>
      <Router>
        <Route path="/login" element={<AuthForm />}></Route>
        {loginlocalstore && (
          <Route path="/main/*" element={<InboxPage />}>
            <Route path="inboxlist" element={<InboxList />} />
            <Route path="text-edit" element={<TextEditing />} />
            <Route path="sentmessage" element={<SentMessage />} />
          </Route>
        )}
        {!loginlocalstore && (
          <Route element={<Navigate replace to="login" />} />
        )}

        {/* <TextEditing></TextEditing> */}
      </Router>
    </div>
  );
}

export default App;
