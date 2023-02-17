import { Route, Redirect, Switch } from "react-router-dom";
import MainHeader from "./components/Authentication/MainHeader";
import SignUpPage from "./components/Pages/SignUpPage";
import Welcome from "./components/Pages/Welcome";
import VerifyEmail from "./components/Authentication/VerifyEmail";
import LogOut from "./components/Pages/LogOut";
import Forgot from "./components/Authentication/Forgot";
import Expenses from "./components/Pages/Expenses";
import { useDispatch, useSelector } from "react-redux";
import classes from "./App.module.css";
import { authActions } from "./Store/AuthReducer";
import Profile from "./components/Profile/Profile";
import { useEffect } from "react";
import { fetchExpneses } from "./Store/ExpenseAction";

//import { AuthContextProvider } from "./Store/AuthContext";

let isInitial = true;
function App() {
  /*<Redirect to="/welcome" /> */
  const loggedIn = useSelector((state) => authActions.login);
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  let totalAmount = 0;
  totalAmount = expense.expenses?.reduce((ack, item) => {
    return (ack += Number(item.enteredAmount));
  }, 0);
  const toggle = useSelector((state) => state.theme.toggle);

  useEffect(() => {
    dispatch(fetchExpneses());
  }, []);

  return (
    <MainHeader
      className={
        totalAmount >= 1000
          ? toggle
            ? classes.dark
            : classes.ligt
          : classes.ligt
      }
    >
      <div>
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          {loggedIn && (
            <Route path="/verify">
              <VerifyEmail />
            </Route>
          )}
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/logout">
            <LogOut />
            <Redirect to="/signup" />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
        </Switch>
      </div>
    </MainHeader>
  );
}

export default App;
