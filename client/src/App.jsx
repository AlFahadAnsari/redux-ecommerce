import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import AddToCart from './components/AddToCart';
import Product from './components/Prouduct';
import PoroductDetails from './components/PoroductDetails';
import Login from './components/Login';
import Home from './Home';
import Signup from './components/Signup';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<PoroductDetails/>} /> 
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
};

export default App;
