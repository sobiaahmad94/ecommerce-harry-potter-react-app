import React from 'react';

const ProductItem = ({ product, handleAddToCart, isAddedToCart }) => {
  const handleClick = () => {
    handleAddToCart(product);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: £{product.price}</p>
      {isAddedToCart ? (
        <button disabled>Added to Cart</button>
      ) : (
        <button onClick={handleClick}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
