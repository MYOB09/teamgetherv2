import ScrollIntoView from "react-scroll-into-view";
import TeamgetherLogo from "./assets/teamgether-logo-2.png";
import Greek from "./assets/greekflag.png";
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
      <img
        className=" h-12 sm:block sm:h-24 sm:w-auto hover:cursor-pointer"
        src={TeamgetherLogo}
      ></img>

      <ul className="inline-flex space-x-4 sm:space-x-12 text-xs sm:text-lg ">
        <li className="hidden sm:block font-semibold hover:cursor-pointer hover:text-sky-300">
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
              <DropdownMenuItem>
                <span>Book a Demo</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hidden sm:block font-semibold hover:cursor-pointer hover:text-sky-300">
          Pricing
        </li>
        <li className="font-semibold hover:cursor-pointer hover:text-blue-800">
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
              <DropdownMenuItem>
                <span>FAQ</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Contact us</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="pt-2 pr-4 w-12 h-12  ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img className="hover:cursor-pointer" src={Greek} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
              <DropdownMenuItem className="p-0 ">
                <img className="w-full h-12" src={English} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
