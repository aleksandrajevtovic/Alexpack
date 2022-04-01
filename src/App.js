import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
// import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Bag from "./components/Bag/Bag";
import Product from "./components/Product/Product";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products/Products";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";

const App = () => {
  
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};



// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const { data } = await commerce.products.list();

//     setProducts(data);
//   };

//   useEffect(() => {}, []);
// fetchProducts();
// // console.log(products);
//   <div>
//     <Navigation />
//     <Products products={products} />
//     <Footer />
//   </div>
// };

// export default App;
