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

function Navbar() {
  return (
    <div className="bg-white items-center sticky top-0 flex justify-between w-full h-20">
      <div>
        <a href="/teamgetherv2/#/home">
          <img
            className=" h-12 sm:block sm:h-24 sm:w-auto hover:cursor-pointer"
            src={TeamgetherLogo}
          ></img>
        </a>
      </div>

      <ul className="inline-flex space-x-4 sm:space-x-12 text-xs sm:text-lg ">
        <li className="hidden sm:block font-semibold hover:cursor-pointer hover:text-sky-300 pt-4">
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
                <DropdownMenuItem>
                  <span>Book a Demo</span>
                </DropdownMenuItem>
              </ScrollIntoView>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hidden sm:block font-semibold hover:cursor-pointer hover:text-sky-300 pt-4">
          <ScrollIntoView selector="#prices">Pricing</ScrollIntoView>
        </li>
        <li className="hidden sm:block font-semibold hover:cursor-pointer hover:text-sky-300 pt-4">
          Features
        </li>
        <li className="font-semibold hover:cursor-pointer hover:text-blue-800 pt-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="bg-sky-300 border-0 text-white hover:text-sky-300 hover:bg-white hover:border-2 hover:border-sky-300"
                variant="outline"
              >
                About us
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <ScrollIntoView selector="#faq">
                <DropdownMenuItem>
                  <span>FAQ</span>
                </DropdownMenuItem>
              </ScrollIntoView>
              <ScrollIntoView selector="#contactus">
                <DropdownMenuItem>
                  <span>Contact us</span>
                </DropdownMenuItem>
              </ScrollIntoView>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="pt-2 pr-4 w-12 h-12  ">
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
  );
}

export default Navbar;
