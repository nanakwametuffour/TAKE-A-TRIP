import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";
export default function Slide2() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="bg-[url('/public/images/brands/hotelwall1.jpg')] brightness-100 overflow-hidden rounded-xl my-7 bg-center bg-cover bg-no-repeat w-full object-cover h-auto">
      <div className="w-full bg-black/60 flex py-10 flex-col h-full px-1 md:px-2 lg:px-2 ">
        <div className="flex flex-col my-3">
          <h1 className="text-[#f1f1f1] text-2xl font-semibold">
            Top deals for a last minute getaway
          </h1>
          <span className="text-gray-300 font-semibold">
            Showing deals for: {currentTime.toDateString()}
          </span>
        </div>
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          className=" -z-0"
        >
          <div className="px-2">
            <Card1 />
          </div>
          <div className="px-2">
            <Card2 />
          </div>
          <div className="px-2">
            <Card3 />
          </div>
          <div className="px-2">
            <Card4 />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
