import { Route } from "react-router-dom";
import Header from "./components/Header";
import Logout from "./components/Pages/Logout";

function App() {
  return (
    <div>
      <Header />
      <Route path="/signup">
        <Logout />
      </Route>
    </div>
  );
}

export default App;
