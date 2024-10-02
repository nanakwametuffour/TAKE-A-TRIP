import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaBarsStaggered, FaChevronDown } from 'react-icons/fa6'
import { MdMessage } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-white shadow-md sticky top-0 z-30'>
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center px-5 py-3">
          <div className="flex items-center gap-4">
            <Link to={'/'}>
            <div className="flex items-center justify-center w-full">

            <h1 className='font-semibold text-3xl'>Trip.</h1>
            <span className='mt-3 text-red-600'>com</span>
            </div>
            </Link>
             
          </div>
         <div className="hidden md:flex lg:flex justify-center gap-7 items-center">
         <div className="flex justify-center items-center capitalize text-red-600 font-semibold">
                <h2 className=' whitespace-nowrap'>shop travel</h2>
                <FaChevronDown/>
             </div>
            <div className="flex w-full justify-center items-center gap-5 text-1xl capitalize text-red-600 font-semibold">
                <Link to={'/list-property'}>
                 <span>List your property</span>
                </Link>
                <Link to={'/support'}>
                 <span>support</span>
                </Link>
                <Link to={'/trip'}>
                 <span className='flex items-center justify-center'>trips
                 <CiHeart className='text-2xl'/>

                 </span>
                </Link>
                <Link to={'/message'}>
                 <span>
                 <MdMessage className='text-2xl'/>
                 </span>
                </Link>
            </div>
         </div>
         <FaBarsStaggered className='block lg:hidden text-3xl active:scale-110 hover:opacity-70 cursor-pointer'/>

        </div>
        </header>
  )
}

export default Header