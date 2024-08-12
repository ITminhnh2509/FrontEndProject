import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataProduct } from "../../redux/productSlice";
import Pagination from "react-js-pagination";
import "./product.css";
import Product from "./Product";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { addItem } from "../../redux/cart/cartSlice";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");

  const dispatch = useDispatch();
  const { products, totalPage, categories, materials } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(
      fetchDataProduct({ page: currentPage, searchTerm, category, material })
    );
    window.scrollTo(0, 0);
  }, [currentPage, searchTerm, category, material, dispatch]);
  const handle_Page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
    localStorage.setItem("searchTerm", searchTerm);
    localStorage.setItem("category", category);
    localStorage.setItem("material", material);
  }, [currentPage, searchTerm, category, material]);

  return (
    <Container sx={{ marginTop: 10 }}>
      <Box>
        <Breadcrumbs category={products.category} productName={products.name} />
      </Box>
      <TextField
        label="Search Product"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((cat, index) => (
          <MenuItem key={index} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <Select
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        displayEmpty
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="">All Materials</MenuItem>
        {materials.map((mat, index) => (
          <MenuItem key={index} value={mat}>
            {mat}
          </MenuItem>
        ))}
      </Select>
      <Grid container spacing={0}>
        {products.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} xs={6} key={index}>
            <Product product={item} addItem={addItem} />
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
