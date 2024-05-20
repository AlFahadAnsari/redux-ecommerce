import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Prouduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
import Footer from './components/Footer'
import AddToCart from './components/AddToCart';

const App = () => {
  return (

    <div >
      <Router>
        <Navbar/>
        <Routes>
              <Route path='/' element={<Product/>}/>             
              <Route path='/cart' element={<AddToCart/>}/>             
        </Routes>
        <Footer/>
        <Toaster />
      </Router>
    </div>

  )
}

export default App