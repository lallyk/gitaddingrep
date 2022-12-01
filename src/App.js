import { useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import CartProvider from "./Store/CartProvider";
import { Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
