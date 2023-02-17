import { useState } from "react";
import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import ContactUs from "./components/Pages/ContactUs";
import Products from "./components/Pages/Products";
import ProductInformation from "./components/Pages/ProductInformation";
import { CartContextProvider } from "./Store/CartContext";
import Footer from "./components/footer/Footer";
import LoginContext from "./Store/login-context";

function App() {
  const loginCtx = useContext(LoginContext);
  const isloggedIn = loginCtx.isloggedIn;
  console.log(isloggedIn);
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartContextProvider>
      <div className={classes.wrap}>
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About">
            <About />
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
          <Route path="/products/:productDetail">
            <ProductInformation />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
