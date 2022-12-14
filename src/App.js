import { Route, Redirect, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import SignUpPage from "./components/Pages/SignUpPage";
import Welcome from "./components/Pages/Welcome";
import Update from "./components/Pages/Update";
import VerifyEmail from "./components/Pages/VerifyEmail";
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
      </Switch>
    </MainHeader>
  );
}

export default App;
