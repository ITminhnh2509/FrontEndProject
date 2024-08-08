import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import homebg1 from "../../../img/home-bg1.jpg";
export default function CarouselIntro() {
  return (
    <Container
      sx={{
        height: "70vh",
        marginTop: "64px",
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
        backgroundColor: "blue",
        backgroundImage: `url(${homebg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      maxWidth="false" // Use "false" to avoid default container max-width restrictions
    >
      <Box
        color="white"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          height: "70%",
          zIndex: 1, // Ensure content is above the background image
          backgroundImage:
            'url("https://demo2.themelexus.com/sunic/wp-content/uploads/2024/06/h1-slider-s1.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Optional: Add a semi-transparent overlay for better text visibility
          padding: "16px", // Optional: Add padding for better spacing
        }}
      >
        <Typography
          pt={4}
          fontSize="20px"
          variant="overline"
          display="block"
          gutterBottom
        >
          New collections items
        </Typography>
        <Typography
          variant="h1"
          display="block"
          gutterBottom
          sx={{
            textTransform: "uppercase",
          }}
        >
          Hottest <br /> picks brand
        </Typography>
      </Box>
    </Container>
  );
}
