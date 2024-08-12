import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/productSlice";
import Breadcrumbs from "../../component/breadcrumbs/Breadcrumbs";
import {
  CircularProgress,
  Typography,
  Box,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { addItem } from "../../redux/cart/cartSlice";
import Swal from "sweetalert2";
import ReactImageMagnify from "react-image-magnify";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.products);
  const product = products.find((product) => product.id === id) || {};
  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    Swal.fire({
      title: "Congrats!",
      text: "You Added the Product!",
      icon: "success",
    });
  };
  useEffect(() => {
    dispatch(fetchProductById(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  let content;

  if (status === "loading") {
    content = <CircularProgress />;
  } else if (status === "succeeded") {
    content = (
      <Grid spacing={2} container justifyContent={"center"}>
        <Grid item lg={6} sm={12}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.name || "Product Image",
                isFluidWidth: true,
                src: product.img || "https://picsum.photos/300/200",
              },
              largeImage: {
                src: product.img || "https://picsum.photos/800/600",
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "150%",
              },
              style: {
                zIndex: "10",
              },
            }}
          />
        </Grid>
        <Grid item lg={6} sm={12} sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              paddingLeft: "10px",
            }}
          >
            <Typography variant="h4" py={2}>
              {product.name || "Product Name"}
            </Typography>
            <Typography variant="body1" lineHeight={2}>
              <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
              {product.category || "Product category "}
            </Typography>
            <Typography variant="body1" lineHeight={2}>
              <span style={{ fontWeight: "bold" }}>Material:</span>{" "}
              {product.material || "Product material "}
            </Typography>
            <Typography variant="body1" lineHeight={2}>
              <span style={{ fontWeight: "bold" }}>Price:</span> $
              {product.price || "Product price "}
            </Typography>
            <Typography variant="body2" lineHeight={2}>
              <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
              {product.description || "Product description"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                size="medium"
                className="btn btn-success"
                onClick={handleAddToCart}
                sx={{
                  width: "100%",
                  maxWidth: "200px",
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
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
      <Container sx={{ padding: 3, marginTop: "64px" }}>
        <Box>
          <Breadcrumbs category={product.category} productName={product.name} />
        </Box>
        <Typography variant="h3" gutterBottom>
          Product Detail
        </Typography>
        {content}
      </Container>
    </>
  );
}
