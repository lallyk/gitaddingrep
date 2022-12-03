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
import { Route } from "react-router-dom";
//import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import LogoutPage from "./components/Pages/LogoutPage";

function App() {
  return (
    <MainHeader>
      <Route path="/signup">
        <LogoutPage />
      </Route>
    </MainHeader>
  );
}

export default App;
