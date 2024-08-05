import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { Container } from "@mui/material";
import CardIntro from "../../component/landingpage/IntroCard/CardIntro";
import CarouselIntro from "../../component/landingpage/carousel/CarouselIntro";

export default function Home() {
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: 10 }}>
        <CarouselIntro />
        <CardIntro />
      </Container>
      <Footer />
    </div>
  );
}
