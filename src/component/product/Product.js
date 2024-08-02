import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function Product(props) {
  const { product, addItem } = props;
  const dispatch = useDispatch();
  return (
    <Card
      className="animate__animated animate__fadeIn"
      sx={{ maxWidth: 345, margin: 2, paddingX: 1, paddingY: 2 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={"https://picsum.photos/300/200"}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
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
        <Box>
          <Link to={`/detail/${product.id}`}>Chi tiết sản phẩm</Link>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="medium"
          className="btn btn-success"
          onClick={() => dispatch(addItem(product))}
        >
          Button
        </Button>
      </CardActions>
    </Card>
  );
}
