import React from 'react';

// props.product or {product} deconstructure
function ProductItem({product}) {
    return (
    <>
    <table className="product-item-table">
        <tr>
            <th>Product ID:</th>
            <th>Product Name:</th>
            <th>Product Price:</th>
        </tr>
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    </table>
    </>

    )};

export default ProductItem;