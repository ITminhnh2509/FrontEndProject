import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "animate.css";
import Product from "./pages/product/Product";
import Cart from "./component/cart/Cart";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/detail/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}
