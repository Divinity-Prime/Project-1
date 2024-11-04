import { useState } from "react"; // Importing React hooks

// ProductCard component displays product details and allows adding to cart
const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0); // State to track selected quantity

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    if (quantity === 0) {
      alert("Please select a quantity before adding to the cart."); // Alert if no quantity selected
    } else {
      addToCart(product, quantity); // Call addToCart with the product and quantity
    }
  };

  return (
    <div className="product-card">
      {/* Container for product details */}
      <h3>{product.productName}</h3> {/* Product name */}
      <img src={product.image} alt={product.productName} />
      {/* Product image */}
      <p>
        <b>{product.brand}</b> {/* Product brand */}
      </p>
      <div>
        <button
          onClick={() => setQuantity(quantity - 1)} // Decrease quantity
          disabled={quantity <= 0} // Disable button if quantity is zero
        >
          -
        </button>
        <span>{quantity}</span> {/* Display current quantity */}
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        {/* Increase quantity */}
      </div>
      <p>
        <b>{product.price}</b> {/* Product price */}
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* Button to add product to cart */}
    </div>
  );
};

export default ProductCard; // Exporting the ProductCard component
