import { useState } from "react"; // Importing React hooks

// QuantityCounter component for managing product quantity
const QuantityCounter = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="quantity-counter">
      {" "}
      {/* Container for quantity controls */}
      <button onClick={decreaseQuantity} disabled={quantity <= 1}>
        {" "}
        {/* Decrease button */}-
      </button>
      <span>{quantity}</span> {/* Display current quantity */}
      <button onClick={increaseQuantity}> + </button> {/* Increase button */}
    </div>
  );
};

export default QuantityCounter; // Exporting the QuantityCounter component
