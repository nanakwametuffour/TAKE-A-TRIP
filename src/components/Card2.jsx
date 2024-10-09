import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { property1, property2 } from "../../public/images/property";
export default function Card2() {
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
          {property2?.map((item) => (
            <div className="">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full object-cover h-[160px]"
                />
              </div>
              
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </div>
  )
}
