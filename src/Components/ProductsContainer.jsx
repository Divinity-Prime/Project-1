import { useState } from "react"; // Importing React hooks
import ProductCard from "./ProductCard"; // Importing the ProductCard component

// ProductsContainer component displays a list of products
const ProductsContainer = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {" "}
      {/* Container for product cards */}
      {products.map((product) => (
        <ProductCard
          key={product.id} // Unique key for each product
          product={product} // Passing product data to ProductCard
          addToCart={addToCart} // Function to add product to cart
        />
      ))}
    </div>
  );
};

export default ProductsContainer; // Exporting the ProductsContainer component
