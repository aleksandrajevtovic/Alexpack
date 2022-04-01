import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from '../components/Contact/Contact';
import Shop from './Shop';
import Error from '../components/Error/Error';
import About from '../components/About/About';
import Bag from '../components/Bag/Bag';
import Product from '../components/Product/Product';


const Pages = () => {
    const location=useLocation();
  return (
<Routes location={location} key={location.pathname}>
<Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/product" element={<Product />} />
    </Routes>
  )
}

export default Pages