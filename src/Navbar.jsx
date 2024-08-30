import ScrollIntoView from "react-scroll-into-view";
import TeamgetherLogo from "./assets/logo3.jpg";
import Greek from "./assets/greece.svg";
import English from "./assets/englishflag.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-[20]">
      <div className="bg-white items-center sticky top-0 flex justify-between w-full h-24">
        <div className="ml-4 sm:ml-12">
          <a href="/teamgetherv2/#/home">
            <img
              className="w-44   sm:h-20 sm:w-auto hover:cursor-pointer"
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
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline active:underline ">
            <ScrollIntoView selector="#prices">Pricing</ScrollIntoView>
          </li>
          <NavLink
            to="/book-a-demo"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          >
            Book a Demo
          </NavLink>
          <NavLink
            to="/contact-us"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          >
            Contact us
          </NavLink>
          <li className="mt-2 lg:hidden mx-4">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </li>
          <li className="pr-4 w-12 h-12 hidden lg:block ">
            <DropdownMenu className="w-12 h-12">
              <DropdownMenuTrigger asChild>
                <img
                  className="hover:cursor-pointer sm:h-8 sm:rounded-full"
                  src={English}
                />
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
      {isMenuOpen && (
        <div className="bg-white w-full text-center lg:hidden">
          <ul className="space-y-4 text-lg">
            <NavLink
              to="/features"
              className="block font-semibold hover:cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              Features
            </NavLink>
            <NavLink
              to="/industries"
              className="block font-semibold hover:cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              Industries
            </NavLink>
            <NavLink
              to="/about"
              className="block font-semibold hover:cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/book-a-demo"
              onClick={toggleMenu}
              className="block font-semibold hover:cursor-pointer hover:underline"
            >
              Book a demo
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={toggleMenu}
              className="block font-semibold hover:cursor-pointer hover:underline"
            >
              Contact us
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
