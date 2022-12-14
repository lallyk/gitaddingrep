/*import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};*/
import React, { useState } from "react";

const AuthContext = React.createContext({
  tokenId: "",
  isloggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storedToken = localStorage.getItem("tokenId");
  const [token, setToken] = useState(storedToken);
  const isloggedIn = token ? true : false;

  const login = (token) => {
    setToken(token.idToken);
  };

  const logout = () => {
    localStorage.removeItem("tokenId");
    setToken(null);
  };

  const contextValue = {
    tokenId: token,
    isloggedIn: isloggedIn,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
