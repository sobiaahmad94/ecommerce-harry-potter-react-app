import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';



function App() {
  return (
    <>
      <Router>
        <NavBar />


      </Router>

    </>

  );
}

export default App;
