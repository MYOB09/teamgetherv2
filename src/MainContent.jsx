import { Button } from "./components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import PhoneIcon from "./assets/heroimage.png";
import PlayButton from "./assets/play.svg";

import Teaser from "./Teaser";

function MainContent() {
  return (
    <div>
      <div className="flex mb-8 mt-8 sm:mt-24 sm:mb-24 pt-18 h-full">
        <div className="w-full lg:w-7/12 mx-4 ">
          <div className="text-2xl lg:text-6xl font-bold ">
            Running teams <span className="text-sky-300">efficiently</span> and{" "}
            <span className="text-sky-300 ">effectively</span>, both{" "}
            <span className="text-sky-300">localy</span> and{" "}
            <span className="text-sky-300">globally</span> has never been{" "}
            <span className="text-sky-300">easier</span>.
          </div>
          <div className="text-normal sm:text-3xl pt-12 font-semibold">
            Create a secure and simple environment providing quick communication
            capabilities among team members to solve problems, exchange ideas
            and share common issues
          </div>
          <div className="flex justify-center pt-12 -pl-2">
            <div className="">
              <Button className="border-sky-300 bg-sky-300 hover:bg-white hover:text-sky-300 border-2 hover:border-sky-300 sm:text-2xl sm:p-6">
                Book a Demo
              </Button>
            </div>

            <div className="mx-12 ">
              <Button className="border-2 bg-white text-sky-300 border-sky-300 hover:bg-sky-300 hover:text-white sm:text-2xl ">
                How it works
                <div className="h-8 w-8 lg:h-10 lg:w-10 ml-4">
                  <img src={PlayButton} />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-3/12 mx-12">
          <img src={PhoneIcon} className="" />
        </div>
      </div>
      <div className="flex justify-center mt-12 mx-12 mb-12">
        <div className="bg-sky-300 rounded-full w-full sm:w-6/12  text-center space-y-6 font-semibold p-12">
          <div className="text-xl">
            <p className="text-white">
              Using <span className=" font-bold">Teamgether</span>?
              <br />
              Enter your Company ID here
            </p>
          </div>
          <div className="flex justify-end">
            <div className="absolute  hover:cursor-pointer hover:text-sky-300  text-black mt-4  rounded-full    ">
              <ArrowRight size={26} />
            </div>
          </div>
          <div className=" container bg-white rounded-xl w-full mx-auto rounded-xl w-full ring-1 focus-within:ring-2 ring-sky-800 focus-within:ring-sky-800">
            <input
              className=" p-1 rounded-xl w-full focus:outline-none ring-0 focus:ring-0 "
              type="text"
              placeholder="Company ID"
            />
          </div>
        </div>
      </div>
      <Teaser />
    </div>
  );
}

export default MainContent;
