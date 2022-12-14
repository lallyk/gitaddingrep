import { Route, Redirect, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import SignUpPage from "./components/Pages/SignUpPage";
import Welcome from "./components/Pages/Welcome";
import Update from "./components/Pages/Update";
import VerifyEmail from "./components/Pages/VerifyEmail";
import LogOut from "./components/Pages/LogOut";
import Forgot from "./components/Pages/Forgot";
import Expenses from "./components/Pages/Expenses";
//import { AuthContextProvider } from "./Store/AuthContext";

function App() {
  /*<Redirect to="/welcome" /> */
  return (
    <MainHeader>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/verify">
          <VerifyEmail />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/update">
          <Update />
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
    </MainHeader>
  );
}

export default App;
