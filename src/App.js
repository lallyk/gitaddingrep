/*import { Fragment } from "react";
import Header from "./components/Layout/Header";
//import MealItem from "./components/Meals/MealItem";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <Meals />
    </Fragment>
  );
}

export default App;*/
import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
