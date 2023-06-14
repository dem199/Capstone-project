import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <header>
      <Link to="/">
        <h2>Add Pics</h2>
      </Link>
      <Link to="/cart">
        <div className="cart-icon">
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
          {cartItems.length > 0 && (
            <span className="cart-counter">{cartItems.length}</span>
          )}
        </div>
      </Link>
    </header>
  );
}

export default Header;
