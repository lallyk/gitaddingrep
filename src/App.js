/*import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import LogoutPage from "./components/Pages/LogoutPage";
//import Logout from "./components/Pages/LogoutPage";

function App() {
  return (
    <MainHeader>
      <div>
        <Header />
        <Switch>
          <Route path="/signup">
            <LogoutPage />
          </Route>
        </Switch>
      </div>
    </MainHeader>
  );
}

export default App;*/
//import { Route, Switch } from "react-router-dom";
//import Header from "./components/Header";
import { Route, Redirect, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import LogoutPage from "./components/Pages/LogoutPage";
import Welcome from "./components/Pages/Welcome";
import Profile from "./components/Pages/Profile";

function App() {
  /*<Redirect to="/welcome" /> */
  return (
    <MainHeader>
      <Switch>
        <Route path="/signup">
          <LogoutPage />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </MainHeader>
  );
}

export default App;
