import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { apart, hotel } from "../assets/apartment";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlaneDeparture, FaRegHeart } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
export default function Recomendation() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
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
    <div className="mt-5  w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-semibold">Recommended stays for you</h1>
        <p>Based on your most recently viewed property</p>
      </div>
      <Carousel
        className=" -z-0"
        responsive={responsive}
        infinite={true}
        centerMode={true}
        arrows
      >
        {hotel?.map((item) => (
          <Link key={item.id} to={"/hotels"} className="flex w-full px-1 lg:px-2">
              <div className="border flex flex-col shadow-lg rounded-lg overflow-hidden w-full relative">
                  <img src={item.img} alt={item.name} className=" w-full h-[150px] object-cover"/>
                  <div className="bg-white absolute top-2 right-3 w-8 h-8 flex items-center justify-center rounded-full">
                  <FaRegHeart className="text-red-600 text-2xl z-3" />
                </div>
                
                <div className="p-2 gap-2 flex flex-col">
                  <h3 className=" text-sm whitespace-nowrap capitalize font-semibold">{item.name}</h3>
                  <p className="text-base text-black font-normal">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-800 w-10 flex items-center justify-center text-white h-8 rounded-lg p-2">
                      <span className=" font-semibold">{item.rate}</span>
                    </div>
                     <div className="flex-row md:flex lg:flex gap-1">
                     <h4 className="capitalize font-semibold flex-row">
                      {item.review}
                      
                    </h4>
                     <span className=" font-normal text-sm">{item.view}</span>
                     </div>
                   
                  </div>
                </div>
              </div>
          </Link>
        ))}
      </Carousel>
      <div className=" mt-2 p-3">
        <Link className="flex w-40 items-center gap-1 text-blue-700 font-semibold">
          see all properties
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
