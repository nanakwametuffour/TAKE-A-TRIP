import React from "react";

import { HiArrowRight } from "react-icons/hi2";

export default function CustomRightArrow({ onClick }) {
  return (
    <button onClick={onClick}
    className=" absolute bottom-5 right-0 m-auto h-10 w-10 bg-slate-100 flex justify-center items-center rounded-full"
     aria-label="Next"
    >
      <HiArrowRight className="text-base"/>
    </button>
  );
}
