import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
  clearCart,
} from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Grid,
  Divider,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts.carts);
  const totalAmount = useSelector((state) => state.carts.totalAmount);
  const totalQuantity = useSelector((state) => state.carts.totalQuantity);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    paymentMethod: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };
  const handleProceedToPayment = () => {
    setFormData({
      fullName: "",
      email: "",
      address: "",
      paymentMethod: "",
    });
    dispatch(clearCart());
    Swal.fire({
      title: "Thank you!",
      text: "Thank you so much!",
      icon: "success",
    });
  };
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure clear your cart?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Cart is clear.",
          icon: "success",
        });
        dispatch(clearCart());
      }
    });
  };

  return (
    <Box sx={{ padding: { xs: "16px", sm: "32px", md: "64px" } }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {cartItems.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            <Grid container spacing={2}>
              {cartItems.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Card
                    variant="outlined"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 20px",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Link to={`/product/detail/${item.id}`}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: { xs: "100%", sm: 100 },
                          height: { xs: "auto", sm: 100 },
                        }}
                        image={item.img || "https://via.placeholder.com/100"}
                        alt={item.name}
                      />
                    </Link>
                    <CardContent sx={{ flex: 1, width: "100%" }}>
                      <Typography variant="h6">
                        <Link
                          style={{ color: "black" }}
                          to={`/product/detail/${item.id}`}
                        >
                          {item.name}
                        </Link>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: 1,
                          flexWrap: "wrap",
                        }}
                      >
                        <IconButton
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography variant="body2" sx={{ marginX: 1 }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          <AddIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }} />
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          ${item.totalPrice}
                        </Typography>
                        <IconButton
                          onClick={() => handleRemove(item.id)}
                          sx={{ marginLeft: 2 }}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          <Divider sx={{ marginY: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingY: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography variant="h6">
              Total Quantity: {totalQuantity}
            </Typography>
            <Typography variant="h6">Total Amount: ${totalAmount}</Typography>
          </Box>
          {cartItems.length > 0 && (
            <Button variant="contained" color="error" onClick={handleClearCart}>
              Clear Cart
            </Button>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              padding: 2,
              border: "1px solid #ddd",
              borderRadius: 1,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Checkout
            </Typography>
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Shipping Address"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Payment Method"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleFormChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body1" gutterBottom>
                <strong>Total Amount:</strong> ${totalAmount}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
