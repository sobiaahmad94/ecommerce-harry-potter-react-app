import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing the main components
import NavBar from './components/NavBar';
import ProductListPage from './components/ProductListPage';
import ProductInventoryContainer from './components/ProductInventoryContainer';

// importing the other pages
import HomePage from './pages/HomePage';
import CheckOutPage from './pages/CheckOutPage';
import ErrorPage from './pages/ErrorPage';

// importing the data
import productsData from './data/productsData';



function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductListPage products={productsData}/>}></Route>
          <Route exact path="/check-out" element={<CheckOutPage />}></Route>
          <Route exact path="/*" element={<ErrorPage />}></Route>
        </Routes>


      </Router>

    </>

  );
}

export default App;
