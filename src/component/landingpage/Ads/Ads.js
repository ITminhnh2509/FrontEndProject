import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ads.css";
import { Link } from "react-router-dom";

export default function Ads() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container
      className="bg-ads"
      maxWidth="fluid"
      sx={{
        marginTop: "70px",
        height: "40vh",
        paddingTop: "60px",
        color: "#fff",
      }}
    >
      <Container
        data-aos="fade-up"
        data-aos-offset="300"
        sx={{ marginBottom: 4 }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            Extra <span style={{ color: "red" }}>30% Off</span> Online
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Summer Season Sale
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "300", fontSize: "20px" }}
          >
            Free shipping on orders over $99
          </Typography>
          <Link to="/product">
            <Button
              sx={{ marginTop: "30px" }}
              variant="contained"
              size="medium"
            >
              Shop now
            </Button>
          </Link>
        </Box>
      </Container>
    </Container>
  );
}
