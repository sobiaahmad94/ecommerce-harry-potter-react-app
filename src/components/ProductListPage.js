import React from 'react';

const ProductListPage = ({ products, cartItems, handleAddToCart }) => {
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: £{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
      {cartItems && cartItems.length > 0 && (
        <p>Total Price: £{calculateTotalPrice(cartItems).toFixed(2)}</p>
      )}
    </div>
  );
};

export default ProductListPage;
