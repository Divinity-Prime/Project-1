import QuantityCounter from "./QuantityCounter"; // Importing QuantityCounter component

// CartCard component displays individual items in the cart
const CartCard = ({ item, removeFromCart }) => {
  return (
    <div className="cart-card">
      {/* Card container */}
      <div className="info-cart">
        {/* Item info section */}
        <img src={item.image} alt={item.productName} /> {/* Product image */}
        <p>{item.productName}</p> {/* Product name */}
        <p>Price: {item.price}</p> {/* Product price */}
        <QuantityCounter quantity={item.quantity} /> {/* Quantity selector */}
      </div>
      <div className="prices">
        {/* Pricing section */}
        <p>
          <b>
            Total: $
            {(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(
              2
            )}
          </b>
        </p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>{" "}
        {/* Remove button */}
      </div>
    </div>
  );
};

export default CartCard; // Exporting the component
