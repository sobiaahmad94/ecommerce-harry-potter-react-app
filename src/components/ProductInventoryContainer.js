import React, { useState } from 'react';
import ProductListPage from './ProductListPage';
import productsData from '../data/productsData';

function ProductInventoryContainer() {
    const [products, setProducts] = useState([productsData]);

    return (
        <>
        <ProductListPage products={products} />
        </>
    );
}

export default ProductInventoryContainer;
