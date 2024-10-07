import React from "react";
import SearchHeader from "../components/SearchHeader";
import BannerSlide from "../components/BannerSlide";
import ApartmenSlide from "../components/ApartmenSlide";
import Recomendation from "../components/Recomendation";
import HouseSlide from "../components/HouseSlide";
import Brands from "../components/Brands";
import Destination from "../components/Destination";
import Slide1 from "../components/Slide1";
import Slide2 from "../components/Slide2";

export default function Home() {
  return (
    <>
      <HouseSlide />
      <div className="py-10 px-3 md:px-4 lg:px-20">
        <Brands />
        <BannerSlide />
        <ApartmenSlide />
        <Recomendation />
         <Destination/>
         <Slide1/>
         <Slide2/>
      </div>
    </>
  );
}
