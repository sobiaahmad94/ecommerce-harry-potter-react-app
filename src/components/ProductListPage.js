import React from 'react';
import ProductItem from './ProductItem';

function ProductListPage({ products }) {
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))};
    </>
  );
}

export default ProductListPage;
