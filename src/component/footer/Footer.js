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
          height: 300,
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
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Careers
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                variant="body2"
                sx={{ opacity: "0.5", color: "#fff" }}
              >
                Careers
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                variant="body2"
                sx={{ opacity: "0.5", color: "#fff" }}
              >
                Careers
              </Typography>
            </Link>
            <Link to="#">
              <Typography
                variant="body2"
                sx={{ opacity: "0.5", color: "#fff" }}
              >
                Careers
              </Typography>
            </Link>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={6}>
            <Typography>abc</Typography>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={6}>
            <Typography>abc</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
