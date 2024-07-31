import React from 'react';

const Cart = ({ cart, onRemoveFromCart }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cart.map((item, index) => (
      <div key={index} className="cart-item">
        <p>{item.title}</p>
        <p>${item.price}</p>
        <button onClick={() => onRemoveFromCart(item)}>Remove</button>
      </div>
    ))}
    <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
  </div>
);

export default Cart;


