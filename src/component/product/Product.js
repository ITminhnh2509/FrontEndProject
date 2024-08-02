import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
export default function Product(props) {
  const { product } = props;
  return (
    <Card sx={{ maxWidth: 345, margin: 2, paddingX: 1, paddingY: 2 }}>
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
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
