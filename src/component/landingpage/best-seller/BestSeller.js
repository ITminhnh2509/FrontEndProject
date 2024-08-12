import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataProduct } from "../../../redux/productSlice";
import Slider from "react-slick";
import CardActions from "@mui/material/CardActions";
import Swal from "sweetalert2";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
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
import { addItem } from "../../../redux/cart/cartSlice";
const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
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

const BestSeller = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const sliderRef = useRef(null);

  useEffect(() => {
    dispatch(fetchDataProduct({ page: 1 }));
    AOS.init();
  }, [dispatch]);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    Swal.fire({
      title: "Congrats!",
      text: "You Added the Product!",
      icon: "success",
    });
  };
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
      <Typography variant="h3" pt={5} sx={{ textAlign: "center" }}>
        Products
      </Typography>
      <Box
        data-aos="fade-up"
        data-aos-duration="1000"
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
            <Card
              className="animate__animated animate__fadeIn"
              sx={{
                maxWidth: 345,
                margin: 2,
                paddingX: 1,
                paddingY: 2,
              }}
            >
              <Link
                style={{ color: "black" }}
                to={`/product/detail/${product.id}`}
              >
                <CardMedia
                  component="img"
                  height="440"
                  image={product.img}
                  alt={product.name}
                  className="img-product-card"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link
                    style={{ color: "black" }}
                    to={`/product/detail/${product.id}`}
                  >
                    {product.name}
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <Typography variant="h6">${product.price}</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="medium"
                  className="btn btn-success"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </CardActions>
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
