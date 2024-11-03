import { useState } from "react"; // Importing React hooks
import CartCard from "./CartCard"; // Importing the CartCard component

// CartContainer component manages and displays the shopping cart
const CartContainer = ({ cart, removeFromCart, emptyCart }) => {
  // Calculate total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      {" "}
      {/* Container for the cart */}
      {cart.length === 0 ? ( // Check if the cart is empty
        <p>No items in the cart.</p>
      ) : (
        <>
          <h2>Cart items: {totalItems}</h2> {/* Display total items */}
          {cart.map((item) => (
            <CartCard
              key={item.id} // Unique key for each item
              item={item}
              removeFromCart={removeFromCart} // Function to remove an item
            />
          ))}
          <div className="endclass">
            {" "}
            {/* Actions at the end of the cart */}
            <div className="cart-actions1">
              <button onClick={emptyCart}>Empty Cart</button>{" "}
              {/* Button to empty the cart */}
            </div>
            <div className="cart-actions2">
              <button>Buy Total: ${totalPrice.toFixed(2)}</button>{" "}
              {/* Button showing total price */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer; // Exporting the CartContainer component
