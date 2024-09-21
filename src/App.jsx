import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home/Home';
import Cart from './components/pages/Cart/Cart';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder';
const App = () => {
  return (
 
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>}  />
          <Route path='/cart' element={<Cart></Cart>}  />
          <Route path='/order' element={<PlaceOrder></PlaceOrder>}  />
        </Routes>
      </div>
    
  );
}

export default App;
