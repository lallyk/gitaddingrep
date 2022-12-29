import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    login(state, { payload }) {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
    logout() {
      localStorage.removeItem("token");
    },
    initialToken(state) {
      let token = localStorage.getItem("token");
      state.token = token;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
/*import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";
function App() {
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  return (
    <div>
      <Container className="pt-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <Form className="shadow p-3 mt-5 bg-white rounded">
              <h3>{islogin ? "Login" : "SignUp"}</h3>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  autoComplete="off"
                ></Form.Control>
              </Form.Group>
              {!islogin && (
                <Form.Group controlId="Confirm Password">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                  ></Form.Control>
                </Form.Group>
              )}
              <Button
                type="submit"
                variant="primary"
                className="btn btn-primary btn-lg btn-block mb-2"
              >
                {islogin ? "Login" : "SignUp"}
              </Button>
              <Form.Group controlId="btn-secondary">
                <Button className="btn btn-secondary btn-lg btn-block">
                  {islogin ? "SignUp" : "Login existing account"}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
 */
