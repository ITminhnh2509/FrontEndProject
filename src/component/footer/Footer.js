import React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <Container
        className="footer-container"
        maxWidth="fluid"
        sx={{
          background: "#493401",
          height: "60vh",
          paddingTop: "10px",
          color: "#fff",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "space-around",
            marginX: "auto",
          }}
        >
          <Grid lg={3} md={3} sm={6} xs={6}>
            <Typography>
              <Link to={"/"} style={{ textDecoration: "none", color: "#ffff" }}>
                <img className="logo-style" src={logo} />
              </Link>
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias, sint. Voluptates numquam in nobis, rerum modi
            </Typography>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={6}>
            <Typography
              className="typo-footer"
              sx={{ marginBottom: 1 }}
              variant="h6"
            >
              About Us
            </Typography>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Careers
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Our Stores
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Our Cares
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Terms & Conditions
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Privacy Policy
              </Typography>
            </Link>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={6}>
            <Typography
              className="typo-footer"
              sx={{ marginBottom: 1 }}
              variant="h6"
            >
              Customer Care
            </Typography>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Help Center
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Track Your Order
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Corporate & Bulk Purchasing
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Returns & Refunds
              </Typography>
            </Link>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={6}>
            <Typography
              className="typo-footer"
              sx={{ marginBottom: 1 }}
              variant="h6"
            >
              Contact Us
            </Typography>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Careers
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                135 Hai Bà Trưng, Bến Nghé, Quận 1, Hồ Chí Minh 700000, Việt Nam
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Our Cares
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Email: minhnh2509.help@gmail.com
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                sx={{
                  opacity: "0.5",
                  color: "#fff",
                  marginBottom: 1,
                  fontWeight: "lighter",
                }}
                variant="body2"
              >
                Phone: +84 0123 456 789
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
