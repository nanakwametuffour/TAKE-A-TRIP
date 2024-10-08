import React from 'react'
import { HiArrowLeft } from 'react-icons/hi2'

export default function CustomLeftArrow({onClick}) {
  return (
    <button onClick={onClick}
    className=" absolute  bottom-5 left-0 m-auto h-10 w-10 bg-slate-100 flex justify-center items-center rounded-full"
     aria-label="Next"
    >
      <HiArrowLeft className="text-base"/>
    </button>
  )
}
