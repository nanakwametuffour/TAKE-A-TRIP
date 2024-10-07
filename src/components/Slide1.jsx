import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card1 from './Card1';
export default function Slide1() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="bg-[url('/public/images/brands/resort4.jpg')] overflow-hidden rounded-xl my-7 bg-center bg-cover bg-no-repeat w-full object-cover h-auto">
    <div className="w-full bg-black/65 flex py-10 flex-col h-full px-1 md:px-2 lg:px-10">
      <div className=" w-full">
        <h1 className="text-white text-2xl font-semibold">
        Perfect Somewheres 2024

        </h1>
       
      </div>
      <div className="w-full">
        <Carousel
          className="p-4"
          responsive={responsive}
          infinite={true}
          centerMode={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={50000}
          draggable={true}
        >
          <div className="px-2 w-full">
            <Card1 />
          </div>
          <div className="px-2 w-full">
            <Card1 />
          </div>
          <div className="px-2 w-full">
            <Card1 />
          </div>
        </Carousel>
      </div>
    </div>
  </div>
  )
}

