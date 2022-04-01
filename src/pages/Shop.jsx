
import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";


const Shop = () => {
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
    };
  
    useEffect(() => {}, []);
  fetchProducts();
  // console.log(products);
  return (
    <div>
      <Navigation />
      <Products products={products} />
      <Footer />
    </div>
  )
}

export default Shop