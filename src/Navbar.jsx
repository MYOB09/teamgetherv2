import ScrollIntoView from "react-scroll-into-view";
import TeamgetherLogo from "./assets/teamgether-logo-2.png";
import Greek from "./assets/greece.svg";
import English from "./assets/englishflag.png";
import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-[20]">
      <div className="bg-white items-center sticky top-0 flex justify-between w-full h-24 ">
        <div>
          <a href="/teamgetherv2/#/home">
            <img
              className=" h-12 lg:block sm:h-24 sm:w-auto hover:cursor-pointer"
              src={TeamgetherLogo}
            ></img>
          </a>
        </div>
        <ul className="inline-flex space-x-4 sm:space-x-12 text-xs sm:text-lg ">
          <div className="">
            <NavLink
              to="/features"
              className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
            >
              Features
            </NavLink>
          </div>
          <NavLink
            to="/industries"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          >
            Industries
          </NavLink>
          <NavLink
            to="/about"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          >
            About
          </NavLink>
          <li className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>Product</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 text-center">
                <DropdownMenuItem>
                  <span>Overview</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Services</span>
                </DropdownMenuItem>
                <ScrollIntoView selector="#bookademo">
                  <DropdownMenuItem>Book a Demo</DropdownMenuItem>
                </ScrollIntoView>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline active:underline ">
            <ScrollIntoView selector="#prices">Pricing</ScrollIntoView>
          </li>
          <li className="aria-[current=page]:underline decoration-sky-300 font-semibold hover:cursor-pointer hover:underline">
            Contact us
          </li>
          <li className="pr-4 w-12 h-12  ">
            <DropdownMenu className="w-12 h-12">
              <DropdownMenuTrigger asChild>
                <img className="hover:cursor-pointer pt-2" src={English} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuItem className=" p-0 m-0">
                  <img className="h-8" src={Greek} />{" "}
                  <span className="p-4">Greek</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
