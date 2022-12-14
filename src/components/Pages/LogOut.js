import React, { useContext } from "react";
import AuthContext from "../../Store/AuthContext";

const LogOut = () => {
  const authCtx = useContext(AuthContext);
  authCtx.logout();
};
export default LogOut;
