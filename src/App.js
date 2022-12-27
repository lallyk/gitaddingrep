import Authentication from "./Components/Authentication/Authentication";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  return (
    <div>
      <Route path="/login">
        <Authentication />
      </Route>
    </div>
  );
}

export default App;
