import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// page NavBar and pages importe
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CheckOutPage from './pages/CheckOutPage';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/products" element={<ProductsPage />}></Route>
          <Route exact path="/check-out" element={<CheckOutPage />}></Route>
          <Route exact path="/*" element={<ErrorPage />}></Route>
        </Routes>


      </Router>

    </>

  );
}

export default App;
