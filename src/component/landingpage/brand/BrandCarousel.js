import React from "react";
import Slider from "react-slick";
import logoAdidas from "../../../img/adidas-logo.png";
import logocalvin from "../../../img/calvin-klein-logo.png";
import logoChannel from "../../../img/chanel-logo.png";
import logobreguet from "../../../img/breguet-logo.png";
import logoburberrys from "../../../img/burberrys-of-london-logo.png";
import logohm from "../../../img/hm-logo.png";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "@mui/material/Divider";
function BrandCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const listimg = [
    logoAdidas,
    logocalvin,
    logoChannel,
    logobreguet,
    logoburberrys,
    logohm,
  ];

  return (
    <>
      <Box className="slider-container" mt={3} sx={{ overflow: "hidden" }}>
        <Divider orientation="vertical" flexItem />
        <Slider {...settings}>
          {listimg.map((item, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={item}
                alt="Logo"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </Box>
          ))}
        </Slider>
        <Divider orientation="vertical" flexItem />
      </Box>
    </>
  );
}

export default BrandCarousel;
