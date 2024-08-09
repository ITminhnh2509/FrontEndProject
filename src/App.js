import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "animate.css";
import Product from "../src/component/product/Products";
import Cart from "./pages/cart/cart";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
