import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { property } from "../../public/images/propertyData";

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
    <div className="w-full h-auto mb-14">
      <div className="w-full h-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          draggable={true}
        >
          {property?.map((item) => (
             <div key={item.id} className="flex w-full flex-col rounded-lg overflow-hidden h-full">
                <div className="w-[400px] h-auto">
                    <img src={item.image} alt={item.name} className="w-full h-[150px] object-cover" />
                </div>
                <div className="flex my-5 flex-col">
                    <h1 className="text-white">{item.name}</h1>
                     <span className="text-yellow-50">{item.location}</span>
                     <div className="flex gap-2">

                     <span className="text-yellow-50">{item.number_of_bathrooms} bath</span>
                     <span className="text-yellow-50">{item.number_of_beds}beds</span>
                     </div>
                     <span className="text-white">${item.price} / Night</span>
                     
                </div>
             </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Card1;
