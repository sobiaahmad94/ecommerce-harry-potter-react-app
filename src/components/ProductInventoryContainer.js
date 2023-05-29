// // importing useState hook to manage state
// import React, { useState } from 'react';
// import ProductListPage from './ProductListPage';
// import CheckOutPage from './CheckOutPage';
// import {Link} from 'react-router-dom';

// // importing the data
// import productsData from '../data/productsData';

// function ProductInventoryContainer() {
//     // setting products state to what's in productsData (it's the contents of the entire products array)
//     const [products, setProducts] = useState(productsData);
//     // the initial state is showing all of the productsData
//     // setProducts is a function that will change this

//     // adding item to cart function and state
//     // I'm setting the initial state of cartItems to an empty array
//     const [cartItems, setCartItems] = useState([]);

//     // setting the totalPrice to 0 as initial state
//     // the setter function setTotalPrice will change the value
//     const [totalPrice, setTotalPrice] = useState(0);


//     const [isAddedToCart, setIsAddedToCart] = useState(false);

//     // adding item to cart function
//     const handleAddItemToCart = (productId) => {
//         const selectedProduct = products.find((product) => product.id === productId);
//         if (selectedProduct) {
//             setCartItems((prevCartItems) => [...prevCartItems, selectedProduct]);

//             setTotalPrice((prevTotalPrice) => prevTotalPrice + selectedProduct.price);

//             setIsAddedToCart(true);
//         }
//     };

//     return (
//         <>
//           <ProductListPage products={products} addItemToCart={handleAddItemToCart} />
//           <h1>Add a new product to your cart</h1>
//           <Link to="/check-out">Go to the Checkout Page</Link>

//           {/* Render the CheckOutPage component */}
//           {cartItems.length > 0 && (
//             <CheckOutPage cartItems={cartItems} />
//           )}
//         </>
//       );
//     }

// export default ProductInventoryContainer;
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import ProductListPage from '../components/ProductListPage';
import CheckOutPage from './CheckOutPage';
import productsData from '../data/productsData';

// the ProductInventoryContainer component is rendered in the App component
const ProductInventoryContainer = () => {
        // setting products state to what's in productsData (it's the contents of the entire products array)

  const [products, setProducts] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      {/* Other components and elements */}
      <ProductListPage
        products={products}
        handleAddToCart={handleAddToCart}
      />
      <CheckOutPage
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      {/* Other components and elements */}
    </div>
  );
};

export default ProductInventoryContainer;



