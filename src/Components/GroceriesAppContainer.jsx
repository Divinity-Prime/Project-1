import { useState } from "react"; // Importing React hooks
import products from "../data/products"; // Importing product data
import ProductsContainer from "./ProductsContainer"; // Component for displaying products
import CartContainer from "./CartContainer"; // Component for displaying the cart
import NavBar from "./NavBar"; // Navigation bar component

// Main container for the Groceries App
const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]); // State to hold cart items

  // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If product already exists in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Otherwise, add a new product to the cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Function to remove a product from the cart by its id
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Function to empty the cart
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div>
      <NavBar cart={cart} /> {/* Navigation bar with cart info */}
      <div className="groceries">
        <ProductsContainer products={products} addToCart={addToCart} />{" "}
        {/* Display products */}
        <CartContainer
          cart={cart}
          removeFromCart={removeFromCart} // Function to remove item from cart
          emptyCart={emptyCart} // Function to empty the cart
        />
      </div>
    </div>
  );
};

export default GroceriesAppContainer; // Exporting the main app container
