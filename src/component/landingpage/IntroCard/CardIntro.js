import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Container } from "@mui/material";
import "./cardIntro.css";

export default function CardIntro() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container sx={{ paddingTop: "20px", height: "auto" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            sx={{ margin: "0 auto", width: "100%", height: "auto" }}
          >
            <Grid
              data-aos="fade-up"
              data-aos-offset="300"
              sx={{ overflow: "hidden", width: "100%" }}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <Box className="bg-box1"></Box>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-offset="300"
              sx={{ overflow: "hidden", width: "100%" }}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <Box className="bg-box2"></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
