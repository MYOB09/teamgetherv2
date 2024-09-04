import Twitter from "./assets/twity.svg";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className=" flex flex-inline justify-center m-4 text-sm sm:text-xl">
        <NavLink className="aria-[current=page]:underline decoration-sky-300  font-semibold hover:cursor-pointer hover:underline ">
          <span className="text-sky-600 hover:cursor-pointer hover:text-sky-300 mx-2">
            Terms and Conditions
          </span>
        </NavLink>
        <NavLink className="aria-[current=page]:underline decoration-sky-300  font-semibold hover:cursor-pointer hover:underline ">
          <span className="text-sky-600 hover:cursor-pointer hover:text-sky-300 mx-2">
            Privacy Policy
          </span>
        </NavLink>
      </div>
      <footer className="text-center text-xl border-t p-6 bg-black text-white">
        <div>
          <NavLink
            to="/faq"
            className="aria-[current=page]:underline decoration-sky-300  font-semibold hover:cursor-pointer hover:underline "
          >
            <span className="text-red-600 hover:cursor-pointer hover:text-sky-300 mx-2">
              FAQ
            </span>
          </NavLink>
        </div>
        Copyright © 2024{" "}
        <span className="font-bold ">
          Team<span className="text-sky-500">g</span>ether
        </span>{" "}
        <div className="flex justify-center pt-2">
          <div className="w-8 h-8 mx-2 hover:cursor-pointer">
            <img src={Twitter} />
          </div>
          <div className="w-8 h-8 mx-2 hover:cursor-pointer">
            <img src={Facebook} />
          </div>
          <div className="w-8 h-8 mx-2 hover:cursor-pointer">
            <img src={LinkedIn} />
          </div>
        </div>
        <div className="text-sm mt-2">
          <span className="font-semibold">Online Services Email:</span>{" "}
          support@teamgether.com{" "}
          <span className="font-semibold">Phone (USA) :</span> +1 234 567 890{" "}
          <span className="font-semibold">Phone (UK) :</span> +44 123 456 7890{" "}
          <span className="font-semibold">Office Address :</span> 123 Main
          Street, Leicester, LE1 1AB, United Kingdom
        </div>
      </footer>
    </div>
  );
}

export default Footer;
