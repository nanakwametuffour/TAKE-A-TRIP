import React from "react";
import { FaPen } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { TbBrandOpenai } from "react-icons/tb";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BannerSlide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="py-5 w-full h-auto bg-red-600 mt-10 lg:mt-15 rounded-lg pl-0 md:px-1 md:pl-2 lg:pl-36">
     

      <Carousel  responsive={responsive} 
      swipeable={true} 
      draggable={true}
      
      centerMode={true}
      arrows={false}
       
      >
        
        <div className="px-1 w-full">
            <div className="text-white p-3 font-semibold w-full h-[130px] lg:h-[100px] flex justify-center items-center">
                <h1>Find and book your perfect stay Find and book your perfect stay Important details</h1>
            </div>
        </div>
        <div className="px-1 w-full ">
            <div className="bg-black/60 p-3 w-full gap-4 rounded-xl flex justify-center items-center h-[130px] lg:h-[100px]">
            <TbBrandOpenai className="text-3xl text-white w-40"/>
               <h1 className="w-70 text-white"> travel rewards with One Key</h1>
            </div>
        </div>
        <div className="px-1 w-full">
        <div className="bg-black/60 p-3 w-full rounded-xl flex justify-center items-center h-[130px] lg:h-[100px]">
        <FaPen className="text-3xl text-white w-40 rotate-[80deg]"/>
            <h1 className="font-semibold text-white">Save more with Member Prices</h1>
        </div>
        </div>
      
       
        <div className="px-1 w-full">
         <div className="bg-black/60 p-3 w-full rounded-xl flex justify-center items-center h-[130px] lg:h-[100px]">
         <FcCalendar className="w-40 text-3xl"/>
            <h1 className=" text-base text-white font-semibold"> cancellation options if plans change</h1>
         </div>
        </div>
     
      </Carousel>
         
    </div>
  );
}
