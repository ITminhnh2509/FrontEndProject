import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import CartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, Badge, Menu, MenuItem } from "@mui/material";
import logo from "../../img/logo.png";
import "./header.css";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const appBarHeight = 64;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = ["product"];

  const cartItems = useSelector((state) => state.carts.carts);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to={"/"}>MUI</Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{ textAlign: "center" }}
            >
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {item}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ background: "#493401", height: appBarHeight }}
        component="nav"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              <img className="logo-style" src={logo} alt="Logo" />
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              textAlign: "center",
              position: "relative",
            }}
          >
            {navItems.map((item) => (
              <Button
                component={Link}
                to={`/${item.toLowerCase()}`}
                key={item}
                sx={{ color: "#fff", mx: 1 }}
              >
                {item}
              </Button>
            ))}

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 400,
                  width: "20ch",
                },
              }}
            >
              {cartItems.length === 0 ? (
                <MenuItem>No items in cart</MenuItem>
              ) : (
                cartItems.map((item) => (
                  <MenuItem key={item.id}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ flexShrink: 0, width: 40, height: 40 }}>
                        <Link to={`/product/detail/${item.id}`}>
                          <img
                            src={item.img || "https://via.placeholder.com/40"}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Link>
                      </Box>
                      <Box sx={{ marginLeft: 1, flexGrow: 1 }}>
                        <Link to={`/product/detail/${item.id}`}>
                          <Typography
                            style={{ color: "black" }}
                            variant="body2"
                          >
                            {item.name}
                          </Typography>
                        </Link>

                        <Typography variant="body2">
                          ${item.totalPrice}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                ))
              )}
              <MenuItem>
                <Link to="/cart">View Cart</Link>
              </MenuItem>
            </Menu>
          </Box>
          <IconButton
            color="inherit"
            onClick={handleCartClick}
            sx={{ position: "relative" }}
          >
            <Badge badgeContent={cartCount} color="secondary">
              <CartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
