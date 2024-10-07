import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import apart from "../assets/apartment";
export default function HouseSlide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full h-[350px]">
      <Carousel responsive={responsive} infinite={true} arrows={true} className="-z-0">
        {apart?.map((item) => (
          <div key={item.id} className=" relative">
             <img src={item.img} alt={item.name} className="w-full h-[350px] object-cover"/>
               <div className=" absolute top-8 bg-black/60 rounded-r-xl p-2">
                  <p className="text-yellow-50 capitalize animate-pulse">{item.place}</p>
               </div>
                 <div className=" absolute bottom-0 bg-red-600 text-white p-3 rounded-r-md animate-bounce">
                    <span className="font-semibold">{item.price}</span>
                 </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
