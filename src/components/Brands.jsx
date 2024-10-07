 import React from 'react'
import { brands } from '../../public/images/brands/brandsData'
import { Link } from 'react-router-dom'
 
 export default function Brands() {
   return (
     <div className='flex-row  md:flex lg:flex justify-between w-full'>
        <div className="flex items-center gap-2 mb-4 md:mb-0 lg:mb-1">
            <Link className='w-16 h-16 bg-red-600 rounded-full'>
            <div className="w-16 h-16 shadow-[0_0_10px_red]  bg-black/60 text-white text-2xl font-medium border-yellow-50 border-2 rounded-full flex justify-center items-center">
                    <h1>Sell</h1>
                </div>
            </Link>
                <Link className='w-16 h-16 bg-red-600 rounded-full'>
            <div className="w-16 h-16 shadow-[0_0_10px_red]  bg-black/60 text-white text-2xl font-medium  border-yellow-50 border-2 rounded-full flex justify-center items-center">
                 <h1>Rent</h1>
                </div>
                </Link>
                 <Link className='w-16 h-16 bg-red-600 rounded-full'>
            <div className="w-16 h-16 shadow-[0_0_10px_red]  bg-black/60 text-white text-2xl font-medium  border-yellow-50  border-2 rounded-full flex justify-center items-center">
                   <h1>Buy</h1>
                </div>
                 </Link>
        </div>
        <div className="flex gap-3">
            {
                brands?.map((item)=>(
                    <div key={item.id} className="w-full  flex items-center text-5xl p-3">
                          <img src={item.img} alt="" className=' object-cover font-semibold h-auto w-full'/>
                        </div>
                )
                    
                )
            }
        </div>
     </div>
   )
 }
 
