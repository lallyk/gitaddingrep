import React, { useState } from "react";

const LoginContext = React.createContext({
  tokenId: "",
  email: "",
  isloggedIn: false,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const storedToken = localStorage.getItem("idToken");
  const storedEmail = localStorage.getItem("email");
  const [token, setToken] = useState(storedToken);
  const [email, setEmail] = useState(storedEmail);
  const isloggedIn = !!token;
  console.log(token);
  const login = (token, email) => {
    setToken(token);
    localStorage.setItem("idToken", token);
    localStorage.setItem("email", email);
    setEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("idToken");
    setToken(null);
    setEmail(null);
    localStorage.removeItem("email");
  };

  const contextValue = {
    tokenId: token,
    isloggedIn: isloggedIn,
    email: email,
    login: login,
    logout: logout,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
