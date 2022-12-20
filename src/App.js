import { useState } from "react";
import React, { useContext, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
//import Products from "./components/Products/Products";
//import CartProvider from "./Store/CartProvider";
//import ProductContextProvider from "./Store/ProductContextProvider";
import { ProductContextProvider } from "./Store/productContext";
//import { Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import ContactUs from "./components/Pages/ContactUs";
import Products from "./components/Pages/Products";
import ProductInformation from "./components/Pages/ProductInformation";
import loginContext from "./Store/login-context";
import CartContext from "./Store/CartContext";
import Footer from "./components/footer/Footer";
//import { ShowCartContextProvider } from "./Store/ShowCartContext";
/*<Route path="/product">
            <Products />
          </Route>*/
function App() {
  const cartCtx = useContext(CartContext);
  const loginCtx = useContext(loginContext);
  const [cartIsShown, setCartIsShown] = useState(false);
  const { loginCartHandler } = cartCtx;
  const { isloggedIn } = loginCtx;

  // fetching cart data on refresh
  /*useEffect(() => {
    if (isloggedIn) {
      console.log("called");
      //loginCartHandler();
    }
  }, [loginCartHandler, isloggedIn]);*/
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className={classes.wrap}>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/products" exact>
          {!isloggedIn && <Redirect to="/login" />}
          {isloggedIn && <Products />}
        </Route>
        <Route path="/products/:productId">
          <ProductInformation />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
/*<Route path="/login">
            {loginCtx.isloggedIn && <Redirect to="/products" />}
            {!loginCtx.isloggedIn && <Login />}
  <Route path="/login">
          {loginCtx.isloggedIn && <Redirect to="/products" />}
          {!loginCtx.isloggedIn && <Login />}
        </Route> */

export default App;
