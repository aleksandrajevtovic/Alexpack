import React from "react";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero/Hero";
import Innovation from "./components/Innovation/Innovation";
import Features from "./components/Features/Features";
import Howtouse from "./components/Howtouse/Howtouse";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Bag from "./components/Bag/Bag";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/bag" element={<Bag />} />

        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <Navigation />
    <Hero />
    <Innovation />
    <Features />
    <Howtouse />
    <Footer />
  </div>
);

export default App;
