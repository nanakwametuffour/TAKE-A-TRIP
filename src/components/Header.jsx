import { Button, Navbar, NavbarToggle } from "flowbite-react";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;
  return (
    <Navbar className="border-b-2 z-50 sticky top-0">
      <div className="">
        <Link
          to={"/"}
          className="font-semibold text-sm md:text-base lg:text-2xl dark:text-white"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 bg-pink-300 px-2 py-2 rounded-lg text-white">
            TRIP
          </span>
          .com
        </Link>
      </div>
      <div className=" flex gap-2 md:order-2">
        <Button className="w-12 h-10 active:outline-none" color="gray">
          <FaMoon />
        </Button>
        <NavbarToggle className="h-10" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={location==='/'} as={'div'}>
          <Link to={"/list-property"}>
            <span>List your property</span>
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location==='/support'} as={'div'}>
          <Link to={"/support"}>
            <span>support</span>
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location==='/trip'} as={'div'}>
          <Link to={"/trip"}>
            <span className="flex items-center">
              trips
              <CiHeart className="text-2xl" />
            </span>
          </Link>
        </Navbar.Link>
        <Navbar.Link active={location==='/message'} as={'div'}>
          <Link to={"/message"}>
            <span>
              <MdMessage className="text-2xl" />
            </span>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
