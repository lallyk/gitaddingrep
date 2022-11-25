import AvailableProducts from "./components/Products/AvailableProducts";
import "./App.css";
import Header from "./components/Layout/Header";
import ProductsSummary from "./components/Products/ProductsSummary";
import Cart from "./components/Cart/Cart";
import { Fragment, useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <ProductsSummary />
      <AvailableProducts />
    </Fragment>
  );
}

export default App;
