import { useDispatch } from "react-redux";

import { authActions } from "../../Store/AuthReducer";

const LogOut = () => {
  const dispatch = useDispatch();
  dispatch(authActions.logout());
};
export default LogOut;
