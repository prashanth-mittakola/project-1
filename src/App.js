import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import {CartContext} from "./CartContext";
import React, { useEffect, useState } from "react";

// import './App.css';

function App() {
  // let cart = {};

  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, [])

  useEffect(() => {
    window.localStorage.setItem("cart",JSON.stringify(cart));
  }, [cart])

  return (
    <>
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/products" component={ProductsPage} exact></Route>
        <Route path="/products/:id" component={SingleProduct} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
      </Switch>
      </CartContext.Provider>
    </Router>
    </>
  );
}

export default App;
