import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import CardIntro from "../../component/landingpage/IntroCard/CardIntro";
import CarouselIntro from "../../component/landingpage/carousel/CarouselIntro";
import Warranty from "../../component/landingpage/IntroCard/Warranty";
import BestSellet from "./BestSellet";
import Ads from "../../component/landingpage/Ads/Ads";
import BrandCarousel from "../../component/brand/BrandCarousel";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselIntro />
      <BrandCarousel />

      <Warranty />
      <BestSellet />
      <CardIntro />
      <BrandCarousel />
      <Ads />

      <Footer />
    </div>
  );
}
