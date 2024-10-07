import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
   <div className="bg-[url('/public/images/brands/resort5.jpg')] overflow-hidden rounded-xl my-7 bg-center bg-cover bg-no-repeat w-full object-cover h-96">
       <div className="w-full bg-black/65 flex py-10 flex-col h-full px-10">
        <div className=" w-full">
          <h1 className="text-white text-2xl font-semibold">
            Perfect Somewheres 2024
          </h1>
        </div>
        <div className="w-full items-center flex h-full">
           <Carousel responsive={responsive}
             infinite={true}
              centerMode={true}
           >
           <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
           </Carousel>
        </div>
      </div>
   </div>
  )
}

