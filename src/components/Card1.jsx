import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { property1 } from "../../public/images/propertyData";

function Card1() {
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
    <div className="">
     
    <div className="w-full h-auto mb-14">
       
      <div className="w-full">
        <Carousel responsive={responsive} className="w-full"
          infinite={true}
        >
          {property1?.map((item) => (
            <div className="">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full object-cover h-[200px]"
                />
              </div>
              <div className="flex flex-col gap-2 my-3">
                <h1 className="text-yellow-50 text-2xl">{item.name}</h1>
                <p className="text-[#f1f1f1]">{item.location}</p>
                 <div className="flex gap-2 text-gray-200">
                  <span>{item.number_of_beds}beds</span>
                  <span>{item.number_of_bathrooms} baths</span>
                 </div>
                <span className="text-gray-100 font-semibold">{item.price} / Night</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </div>
  );
}

export default Card1;
