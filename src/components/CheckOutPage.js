import React from 'react';

const CheckOutPage = ({ cartItems, handleRemoveFromCart }) => {
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Check Out Page</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
          <p>Total Price: £{calculateTotalPrice(cartItems).toFixed(2)}</p>
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default CheckOutPage;
