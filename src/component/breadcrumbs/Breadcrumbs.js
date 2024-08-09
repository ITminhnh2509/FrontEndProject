import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ category, productName }) => {
  const location = useLocation();
  const { id } = useParams();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Debugging logs
  console.log("Current Pathnames: ", pathnames);
  console.log("Category: ", category);
  console.log("Product Name: ", productName);

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.includes("product") && (
        <>
          {" > "}
          <Link to="/product">Product</Link>
        </>
      )}
      {pathnames.includes("detail") && (
        <>
          {" > "}
          <Link to={`/product/detail/${id}`}>Product Detail</Link>
        </>
      )}
      {productName && (
        <>
          {" > "}
          <span>{productName}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
