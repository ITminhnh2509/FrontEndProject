import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import AOS from "aos";
import "aos/dist/aos.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import "./cardIntro.css";

export default function CardIntro() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container sx={{ paddingTop: "20px", height: "auto" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} sx={{ margin: "0 auto" }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                key={index}
                data-aos="fade-up"
                data-aos-offset="300"
                sx={{ overflow: "hidden" }}
                lg={4}
                md={4}
                sm={6}
                xs={6}
              >
                <Card
                  className="card-intro"
                  sx={{
                    textAlign: "center",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                >
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      <FavoriteBorderIcon />
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>adjective</Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
