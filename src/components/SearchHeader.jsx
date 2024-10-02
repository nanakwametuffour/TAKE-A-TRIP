import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { FaChevronDown, FaLocationDot, FaUser } from "react-icons/fa6";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import TimePicker from "react-time-picker";
import "react-date-range/dist/theme/default.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";

export default function SearchHeader() {
  const [hideDate, setHideDate] = useState(false);
  const [showHeder, setShowHeader] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
   const location = useLocation()
      
   const pathName =(route)=>{
    if(route === location.pathname){
       return true
    }  
         
  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

 
  }
  return (
    <div className="flex flex-col w-full justify-center h-auto border rounded-lg bg-white shadow-lg">
      <div className="w-full flex justify-center border-b gap-5 text-2xl">
        <span
          onClick={() => setShowHeader(false)}
          className={`cursor-pointer py-3 font-medium border-b-[3px] border-b-transparent hover:border-b-red-600`}
        >
          stays
        </span>
        <span
          onClick={() => setShowHeader(true)}
          className={`cursor-pointer font-medium py-3 border-b-[3px] border-b-transparent hover:border-b-red-600`}
        >
          cars
        </span>
      </div>
      {!showHeder ? (
        <div className="flex justify-center w-full items-center">
          <div className=" flex-row gap-3  md:flex lg:flex max-w-6xl mx-auto w-full px-5 py-5">
            <div className="flex mb-4 md:mb-0 lg:mb-0  p-3 gap-2 border w-full rounded-lg items-center">
              <FaLocationDot />
              <input
                type="text"
                className=" focus:outline-none"
                placeholder="where to?"
              />
            </div>
            <div className="flex mb-4 md:mb-0 lg:mb-0 border p-3 w-full rounded-lg relative">
              <span
                onClick={() => setHideDate((prev) => !prev)}
                className=" flex items-center gap-2 cursor-pointer"
              >
                <BsCalendarDate className="text-md font-semibold" />
                {`${format(date.startDate, "MMM, dd, yyyy ")}  to  ${format(
                  date.endDate,
                  "MMM, dd, yyyy"
                )}`}
              </span>
              {hideDate && (
                <div className=" z-10 absolute top-10 w-[300px] right-5 border-2">
                  <DateRangePicker
                    ranges={[date]}
                    onChange={()=>setDate(ranges.selection)}
                    minDate={new Date()}
                  />
                </div>
              )}
            </div>
            <div className="flex mb-4 md:mb-0 lg:mb-0 items-center border p-3 w-full rounded-lg">
              <FaUser />
              <span>travelers</span>
            </div>
            <div className="flex mb-4 md:mb-0 lg:mb-0 justify-center  ">
              <button className="p-3 bg-red-600 text-white rounded-lg w-full font-semibold capitalize">
                search
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full items-center">
          <div className=" flex-row gap-5 lg:flex max-w-6xl mx-auto w-full px-5 md:px-10 py-5">
            <div className="flex mb-4 md:mb-4 lg:mb-0  p-1 gap-2 border w-full rounded-lg items-center">
              <FaLocationDot />
              <input
                type="text"
                className=" focus:outline-none"
                placeholder="pick-up?"
              />
            </div>
            <div className="flex mb-4 md:mb-4 lg:mb-0  p-1 gap-2 border w-full rounded-lg items-center">
              <FaLocationDot />
              <input
                type="text"
                className=" focus:outline-none"
                placeholder="same as pick-up?"
              />
            </div>

            <div className="flex mb-4 md:mb-4 lg:mb-0 border p-1 w-full rounded-lg relative">
              <span
                onClick={() => setHideDate((prev) => !prev)}
                className=" flex  items-center gap-2 cursor-pointer pl-1"
              >
                <BsCalendarDate className="text-md font-semibold" />
                {`${format(date.startDate, "MMM, dd, yyyy ")} to  ${format(
                  date.endDate,
                  "MMM, dd, yyyy"
                )}
              `}
              </span>
              {hideDate && (
                <div className=" z-10 absolute top-10 w-[300px] right-5 border-2">
                  <DateRangePicker
                    ranges={[date]}
                    onChange={()=>setDate(ranges.selection)}
                    minDate={new Date()}
                  />
                </div>
              )}
            </div>
            <div className="flex mb-4 md:mb-4 lg:mb-0 items-center border p-1 w-full rounded-lg">
              <div className="flex justify-between w-full px-1 items-center cursor-pointer">
                <span className="text-gray-400">pick-up time</span>
                <FaChevronDown />
              </div>
            </div>
            <div className=" relative flex mb-4 md:mb-4 lg:mb-0 items-center border p-1 w-full rounded-lg">
              <div className="flex justify-between w-full px-1 items-center cursor-pointer">
                <span className="text-gray-400">Drop-off time</span>
                <FaChevronDown />
              </div>
              <div className=" absolute top-10"></div>
            </div>
            <div className="flex mb-4 md:mb-0 lg:mb-0 justify-center  ">
              <button className="p-3 bg-red-600 text-white rounded-lg w-full font-semibold capitalize">
                search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
