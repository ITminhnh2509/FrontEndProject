import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./component/product/Products";
import Cart from "./pages/cart/cart";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Sendemail from "./component/email/Sendemail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
        <Route path="/email" element={<Sendemail />} />
      </Routes>
      <Footer />
    </>
  );
}
