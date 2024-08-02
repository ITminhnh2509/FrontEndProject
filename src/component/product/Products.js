import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataProduct } from "./../../redux/productSlice";
import Pagination from "react-js-pagination";

import "./product.css";
import Product from "./Product";
import { Container, Grid } from "@mui/material";
export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { products, totalPage } = useSelector((state) => state.products);

  const handle_Page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchDataProduct(currentPage));
  }, [currentPage]);

  return (
    <Container>
      <Grid container spacing={0}>
        {products.map((item, index) => (
          <Grid lg={3} md={4} sm={6} xs={6}>
            <Product key={index} product={item} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        activePage={currentPage}
        itemsCountPerPage={8}
        totalItemsCount={totalPage}
        pageRangeDisplayed={3}
        onChange={handle_Page}
      />
    </Container>
  );
}
