import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ProductInventoryContainer from './components/ProductInventoryContainer';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import CheckOutPage from './components/CheckOutPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductInventoryContainer />} />
        <Route path="/check-out" element={<CheckOutPage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
