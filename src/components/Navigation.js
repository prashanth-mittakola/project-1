import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

import "../index.css";

const Navigation = () => {
  const { cart } = useContext(CartContext);
  if(!cart.totalItems){
    cart.totalItems = 0;
  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" >
          {/* <img style={{ height: 45 }} src="/images/logo.png" alt="logo" /> */}
          <h2 className="logo">HELLO.</h2>
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link className="ml-6" to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
            <div className="ml-6 cartStyle bg-pink-400 hover:bg-pink-500">
                <span>{cart.totalItems}</span>
                <img className="ml-2" src="/images/cart.png" alt="cart" />
            </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
    </>
  );
};

export default Navigation;
