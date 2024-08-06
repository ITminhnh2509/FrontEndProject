import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SavingsIcon from "@mui/icons-material/Savings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentIcon from "@mui/icons-material/Payment";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ads.css";
import { useTheme } from "@mui/material/styles";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function Ads() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container
      className="bg-ads"
      maxWidth="fluid"
      sx={{
        marginTop: "50px",
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
          <Button sx={{ marginTop: "30px" }} variant="contained" size="medium">
            Shop now
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
