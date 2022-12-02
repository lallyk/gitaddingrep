import { useState } from "react";
import React, { useContext, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
//import Products from "./components/Products/Products";
import CartProvider from "./Store/CartProvider";
//import ProductContextProvider from "./Store/ProductContextProvider";
import { ProductContextProvider } from "./Store/ProductContext";
//import { Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import ContactUs from "./components/Pages/ContactUs";
import Products from "./components/Pages/Products";
import ProductInformation from "./components/Pages/ProductInformation";
import loginContext from "./Store/login-context";
import CartContext from "./Store/CartContext";

function App() {
  const cartCtx = useContext(CartContext);
  const loginCtx = useContext(loginContext);
  const [cartIsShown, setCartIsShown] = useState(false);
  const { loginCartHandler } = cartCtx;
  const { isloggedIn } = loginCtx;

  // fetching cart data on refresh
  useEffect(() => {
    if (isloggedIn) {
      console.log("called");
      loginCartHandler();
    }
  }, [loginCartHandler, isloggedIn]);
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
          <Route path="/product" exact>
            {loginCtx.isloggedIn && <Products />}
            {!loginCtx.isloggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/product/:productId">
            {loginCtx.isloggedIn && <ProductInformation />}
            {!loginCtx.isloggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!loginCtx.isloggedIn && <Login />}
            {loginCtx.isloggedIn && <Redirect to="/home" />}
          </Route>
        </Switch>
      </ProductContextProvider>
    </CartProvider>
  );
}

export default App;
