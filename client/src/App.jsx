import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import AddToCart from './components/AddToCart';
import Product from './components/Prouduct';
import PoroductDetails from './components/PoroductDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/product/:id" element={<PoroductDetails/>} /> 
          <Route path="/cart" element={<AddToCart />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
};

export default App;
