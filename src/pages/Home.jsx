import React from 'react'
import SearchHeader from '../components/SearchHeader'
import BannerSlide from '../components/BannerSlide'

export default function Home() {
  return (
    <div className='py-10 px-3 md:px-4 lg:px-20 '>
       <SearchHeader/>
       <BannerSlide/>
    </div>
  )
}
