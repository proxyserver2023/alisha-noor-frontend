// src/components/Cart.js
import React, { useEffect, useState } from "react";
import { getCart, checkout } from "../api/api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  useEffect(() => {
    getCart()
      .then((response) => setCartItems(response.data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const handleCheckout = () => {
    checkout(cartItems)
      .then(() => setCheckoutMessage("Checkout successful!"))
      .catch((err) => {
        console.error("Error during checkout:", err);
        setCheckoutMessage("Checkout failed.");
      });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={handleCheckout}>Checkout</button>
      )}
      {checkoutMessage && <p>{checkoutMessage}</p>}
    </div>
  );
};

export default Cart;
