import React from "react";
import { country } from "../../public/images/brands/brandsData";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Destination() {
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
    <div className="w-full mt-2 py-7 px-4 border-b-2 h-auto">
      <div className=" my-4">
        <h1 className="text-2xl font-semibold">
          Explore stays in trending destinations
        </h1>
      </div>
      <div className="w-full  flex-row md:flex lg:flex h-auto justify-between gap-5">
        <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-4 h-[300px] lg:h-16 w-full">
          {country?.map((item) => (
            <Link key={item.id} className="hover:text-red-600 w-20">
              <div className=" flex items-center ">
                <FaLocationDot />
                <span className=" capitalize">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full md:w-[70%] lg:w-[40%] mt-4 md:mt-0 lg:mt-0">
          <Carousel responsive={responsive}
            infinite={true}
             autoPlay={true}
             autoPlaySpeed={5000}
             arrows={false}
             draggable={true}
          >

          {country?.map((item) => (
            <Link key={item.id}>
              <div className="flex items-center gap-1 w-full overflow-hidden relative">
                <img src={item.img} alt="" className="w-full h-[220px] object-cover" />
                   <div className=" absolute bottom-0 bg-green-950 px-6">
                     <h1 className="text-yellow-50 font-semibold">{item.name}</h1>
                   </div>
              </div>
            </Link>
          ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
