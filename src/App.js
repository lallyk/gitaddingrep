import { useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
//import Products from "./components/Products/Products";
import CartProvider from "./Store/CartProvider";
//import ProductContextProvider from "./Store/ProductContextProvider";
import { ProductContextProvider } from "./Store/ProductContext";
import { Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";
import Products from "./components/Pages/Products";
import ProductInformation from "./components/Pages/ProductInformation";

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
      <ProductContextProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/product/:productId">
            <ProductInformation />
          </Route>
        </Switch>
      </ProductContextProvider>
    </CartProvider>
  );
}

export default App;
