import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataProduct } from "../../../redux/productSlice";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./cardIntro.css";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false, // Disable default arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BestSeller = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const sliderRef = useRef(null);

  useEffect(() => {
    dispatch(fetchDataProduct(1));
    AOS.init();
  }, [dispatch]);

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (status === "failed") {
    return <Typography>Error: {error}</Typography>;
  }

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Container>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Products
      </Typography>
      <Box
        data-aos="fade-up"
        data-duration="1000"
        data-aos-offset="300"
        sx={{
          width: "80%",
          margin: "0 auto",
          padding: "40px 0",
          position: "relative",
        }}
      >
        <Slider {...settings} ref={sliderRef}>
          {products.map((product) => (
            <Card key={product.id} sx={{ padding: "10px", overflow: "hidden" }}>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.img}
                className="card-intro"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
        <Button
          variant="contained"
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        >
          <ArrowBackIosIcon />
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            width: "20px",
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default BestSeller;
