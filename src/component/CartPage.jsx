import React, { useState } from "react";
import "./CartPage.css"; // Add styling
import  cart1 from '../assets/img/cart1.png'
import cart2 from '../assets/img/cart2.png'
import cart3 from '../assets/img/cart3.png'

const CartPage = () => {
  // Initial cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/tshirt.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/shirt.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "32",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/jeans.png",
    },
  ]);

  const deliveryFee = 15;
  const discountPercent = 20;

  // Functions to update quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="cart-page">
      <h1>YOUR CART</h1>
      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={cart1 } alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <p>${item.price}</p>
              </div>

              

              <div className="item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                🗑
              </button>
            </div>


          ))}
        </div>
      
        


       

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ${subtotal}</p>
          <p>Discount (-{discountPercent}%): -${discount}</p>
          <p>Delivery Fee: ${deliveryFee}</p>
          <h3>Total: ${total}</h3>
          <button className="checkout-btn">Go to Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
      
