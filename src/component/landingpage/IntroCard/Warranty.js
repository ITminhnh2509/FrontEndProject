import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./warranty.css";
import SavingsIcon from "@mui/icons-material/Savings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentIcon from "@mui/icons-material/Payment";
import AOS from "aos";
import "aos/dist/aos.css";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function Warranty() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container
      className="bg-warranty"
      maxWidth="fluid"
      sx={{
        marginTop: "30px",
        height: "60vh",
        paddingTop: "300px",
      }}
    >
      <Container
        data-aos="fade-up"
        data-aos-offset="300"
        sx={{ marginBottom: 4 }}
      >
        <Paper>
          <Grid
            sx={{ height: "170px" }}
            container
            spacing={2}
            data-aos="fade-right"
          >
            <Grid
              xs={6}
              sm={6}
              md={6}
              lg={3}
              data-aos="flip-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%", // Adjust height as needed
                  borderRight: "1px solid #ccc",
                  boxShadow: "none",
                }}
              >
                <Box>
                  <LocalShippingIcon
                    sx={{ fontSize: 50, marginRight: "30px" }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Fast Delivery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Start from $10
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={6}
              sm={6}
              md={6}
              lg={3}
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%", // Adjust height as needed
                  borderRight: "1px solid #ccc",
                  boxShadow: "none",
                }}
              >
                <Box>
                  <SavingsIcon sx={{ fontSize: 50, marginRight: "30px" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Money Guarantee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    7 Days Back
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={6}
              sm={6}
              md={6}
              lg={3}
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%", // Adjust height as needed
                  borderRight: "1px solid #ccc",
                  boxShadow: "none",
                }}
              >
                <Box>
                  <AccessTimeIcon sx={{ fontSize: 50, marginRight: "30px" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>365 Days</Typography>
                  <Typography variant="body2" color="text.secondary">
                    For free return
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={6}
              sm={6}
              md={6}
              lg={3}
              data-aos="flip-left"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%", // Adjust height as needed
                  borderRight: "1px solid #ccc",
                  boxShadow: "none",
                }}
              >
                <Box>
                  <PaymentIcon sx={{ fontSize: 50, marginRight: "30px" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>Payment</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Secure system
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
}
