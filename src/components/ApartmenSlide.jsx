import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { apart } from '../assets/apartment'
import { Link } from 'react-router-dom';
 
export default function ApartmenSlide() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='mt-10 py-10 w-full'>
        <div className="mb-2">
            <h1 className='text-2xl font-semibold'>Go beyond your typical stay in Williams</h1>
        </div>
        <Carousel className=' -z-0'
             responsive={responsive}
              infinite={true}
              centerMode={true}
               arrows
             >
         {
            apart?.map((item)=>(
                <Link to={'/hotels'}>
                <div className="flex flex-col gap-5 px-1">
                    
                  <div key={item.id} className=" h-[300px] rounded-lg overflow-hidden relative">
                       <img src={item.img} alt="" className='w-full h-full object-cover'/>
                        <p className=' absolute bottom-2 left-3 text-2xl capitalize text-white font-semibold'>{item.name}</p>
                    </div>
                </div>
                     </Link>
            ))
         }
               </Carousel>
        </div>
  )
}
