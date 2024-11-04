// NavBar component displays user greeting and cart status
const NavBar = ({ cart, username = "User" }) => {
  const cartIsEmpty = cart.length === 0; // Check if the cart is empty

  return (
    <nav className="navbar">
      {/* Navigation bar container */}
      <p>Welcome, {username}!</p> {/* User greeting */}
      <p>
        <b>Grocery Store🍎🏪</b> {/* Store name */}
      </p>
      <div className="cart-container">
        {/* Cart status section */}
        <img
          src={
            cartIsEmpty
              ? "src/assets/cart-empty.png" // Image for empty cart
              : "src/assets/cart-full.png" // Image for full cart
          }
          alt="cartImage" // Alt text for accessibility
        />
      </div>
    </nav>
  );
};

export default NavBar; // Exporting the NavBar component
