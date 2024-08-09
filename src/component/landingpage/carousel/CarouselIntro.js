import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import homebg1 from "../../../img/home-bg1.jpg";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ScrollButton from "./ScrollButton";

const ZoomImage = styled(Box)({
  transition: "transform 0.5s ease",
  "&:hover": {},
});

export default function CarouselIntro() {
  useEffect(() => {
    AOS.init();
  }, []);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <Container
      disableGutters
      maxWidth="fluid"
      sx={{
        backgroundImage: `url(${homebg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "64px",
        height: "95vh",
        overflow: "hidden",
        padding: 0,
        position: "relative",
      }}
    >
      <Slider {...settings} style={{ width: "100%" }}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="100%"
                spacing={2}
              >
                <Grid
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="500"
                  data-aos-delay={index * 1000}
                  data-aos-easing="ease-in-sine"
                  item
                  height="100%"
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Box
                    color="white"
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                      padding: "16px",
                      transform: "translateX(0%)",
                      [theme.breakpoints.up("lg")]: {
                        transform: "translateX(20%)",
                      },
                    })}
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
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        textTransform: "uppercase",
                      }}
                    >
                      Hottest <br /> picks brand
                    </Typography>
                    <Button
                      component={Link}
                      to={`/product`}
                      variant="contained"
                      color="primary"
                    >
                      Shop now
                    </Button>
                  </Box>
                </Grid>
                {!isSmallScreen && (
                  <Grid
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-offset="500"
                    data-aos-delay={(index + 1) * 1000}
                    item
                    height="100%"
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                  >
                    <ZoomImage
                      color="white"
                      height="100%"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        height: "550px",
                        zIndex: 1,
                        backgroundImage: `url("https://demo2.themelexus.com/sunic/wp-content/uploads/2024/06/h1-slider-s${
                          index + 1
                        }.png")`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        padding: "16px",
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </div>
          ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <ScrollButton />
      </Box>
    </Container>
  );
}
