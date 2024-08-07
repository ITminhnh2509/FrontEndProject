import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/productSlice";
import {
  CircularProgress,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.products);
  const product = products.find((product) => product.id === id) || {};

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  let content;

  if (status === "loading") {
    content = <CircularProgress />;
  } else if (status === "succeeded") {
    content = (
      <Card sx={{ maxWidth: 600, margin: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image || "https://picsum.photos/300/200"}
          alt={product.name || "Product Image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product.name || "Product Name"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {product.description || "Product Description"}
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            ${product.price || "0.00"}
          </Typography>
        </CardContent>
      </Card>
    );
  } else if (status === "failed") {
    content = (
      <Typography variant="body1" color="error">
        {error}
      </Typography>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ padding: 3, paddingTop: "64px" }}>
        <Typography variant="h3" gutterBottom>
          Product Detail
        </Typography>
        {content}
      </Box>
      <Footer />
    </>
  );
}
