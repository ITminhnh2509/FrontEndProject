import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
import { addItem } from "../../redux/cart/cartSlice";
import Swal from "sweetalert2";
export default function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    Swal.fire({
      title: "Congrats!",
      text: "You Added the Product!",
      icon: "success",
    });
  };

  return (
    <Card
      className="animate__animated animate__fadeIn"
      sx={{ maxWidth: 345, margin: 2, paddingX: 1, paddingY: 2 }}
    >
      <Link style={{ color: "black" }} to={`/product/detail/${product.id}`}>
        <CardMedia
          component="img"
          height="440"
          image={product.img}
          alt={product.name}
          className="img-product-card"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link style={{ color: "black" }} to={`/product/detail/${product.id}`}>
            {product.name}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Typography variant="h6">${product.price}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="medium"
          className="btn btn-success"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
