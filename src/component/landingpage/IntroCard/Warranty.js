import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SavingsIcon from "@mui/icons-material/Savings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentIcon from "@mui/icons-material/Payment";
import AOS from "aos";
import "aos/dist/aos.css";
import "./warranty.css";

export default function Warranty() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container
      className="bg-warranty"
      maxWidth="xl"
      sx={{ paddingY: 15, height: "auto" }}
    >
      <Box sx={{ padding: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Grid container spacing={2} data-aos="fade-right">
            <Grid
              xs={12}
              sm={6}
              md={3}
              data-aos="flip-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  padding: "10px 20px",
                  borderRight: { md: "1px solid #ccc", xs: "none" },
                  borderBottom: { xs: "1px solid #ccc", md: "none" },
                  textAlign: "center",
                }}
              >
                <LocalShippingIcon
                  sx={{
                    fontSize: 50,
                    marginRight: { md: "20px", xs: "0" },
                    marginBottom: { xs: "10px", md: "0" },
                  }}
                />
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
              xs={12}
              sm={6}
              md={3}
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  padding: "10px 20px",
                  borderRight: { md: "1px solid #ccc", xs: "none" },
                  borderBottom: { xs: "1px solid #ccc", md: "none" },
                  textAlign: "center",
                }}
              >
                <SavingsIcon
                  sx={{
                    fontSize: 50,
                    marginRight: { md: "20px", xs: "0" },
                    marginBottom: { xs: "10px", md: "0" },
                  }}
                />
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
              xs={12}
              sm={6}
              md={3}
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  padding: "10px 20px",
                  borderRight: { md: "1px solid #ccc", xs: "none" },
                  borderBottom: { xs: "1px solid #ccc", md: "none" },
                  textAlign: "center",
                }}
              >
                <AccessTimeIcon
                  sx={{
                    fontSize: 50,
                    marginRight: { md: "20px", xs: "0" },
                    marginBottom: { xs: "10px", md: "0" },
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>365 Days</Typography>
                  <Typography variant="body2" color="text.secondary">
                    For free return
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={3}
              data-aos="flip-left"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  padding: "10px 20px",
                  textAlign: "center",
                }}
              >
                <PaymentIcon
                  sx={{
                    fontSize: 50,
                    marginRight: { md: "20px", xs: "0" },
                    marginBottom: { xs: "10px", md: "0" },
                  }}
                />
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
      </Box>
    </Container>
  );
}
