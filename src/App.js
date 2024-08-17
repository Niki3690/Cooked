import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import SinglePage from "./Pages/SinglePage";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import FAQ from "./Pages/FAQ";
import Facilities from "./Pages/Facilities";
import Blogs from "./Pages/Blogs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="item/:id" element={<SinglePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
