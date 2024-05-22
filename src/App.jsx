import React from 'react';
import Home from "./Home";
import AddCart from './Components/AddCart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndvProduct from './Components/Features/IndvProduct';
import Navbar from "./Components/Features/Navbar";
// import Example from './Components/Example';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<AddCart />} />
          {/* <Route path='/example' element={< Example/>} /> */}

          {/* Use dynamic parameter to capture product ID */}
          <Route path='/products/:productID' element={<IndvProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
