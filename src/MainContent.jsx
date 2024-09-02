import { Button } from "./components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import PhoneIcon from "./assets/heroimage.png";
import PlayButton from "./assets/play.svg";

import Teaser from "./Teaser";
import { NavLink } from "react-router-dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import WhyUs from "./assets/problem.svg";
import Focus from "./assets/focuspeople.svg";
import Features from "./assets/features.svg";
import TailorMade from "./assets/measuring.svg";
import Experience from "./assets/trustworthiness.svg";
import CustomBuild from "./assets/build.svg";
import Discussion from "./assets/message.svg";

function MainContent() {
  return (
    <div>
      <div className="flex mb-8 mt-8 sm:mt-24 sm:mb-24 pt-18 h-full">
        <div className="w-full lg:w-7/12 lg:mx-4">
          <div className="text-2xl lg:text-5xl font-bold mx-4">
            An <span className="text-sky-300">Employee Experience</span> and{" "}
            <span className="text-sky-300 ">Engagement Platform</span> designed
            to{" "}
            <span className="underline decoration-sky-300">
              enhance internal communication
            </span>{" "}
            and{" "}
            <span className="underline decoration-sky-300">
              elevate employee experience and engagement
            </span>
            .
          </div>
          <div className="text-normal sm:text-3xl pt-12 font-semibold mx-4">
            With Team<span className="text-sky-300 font-bold">g</span>ether
            employees can connect with colleagues, share information, and
            celebrate achievements in a more engaging way compared to
            traditional email communication
          </div>
          <div className="flex mx-4 md:justify-center pt-12 -pl-2">
            <div className="">
              <NavLink to="/book-a-demo">
                <Button className="border-sky-300 bg-sky-300 hover:bg-white hover:text-sky-300 border-2 hover:border-sky-300 sm:text-2xl sm:p-6">
                  Book a Demo
                </Button>
              </NavLink>
            </div>

            <div className="mx-4 md:mx-12 ">
              <Button className="border-2 bg-white text-sky-300 border-sky-300 hover:bg-sky-300 sm:text-2xl ">
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
      {/* <div className="flex justify-center mt-12 mx-12 mb-12">
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
      </div> */}
      <Teaser />
      <div className="mt-2 bg-slate-100 text-center w-full rounded-xl p-4">
        <div className="flex justify-center">
          <img src={WhyUs} className="w-16 h-16 " />
          <div className="text-4xl font-bold pt-4 pb-4">&nbsp;Why us? </div>
        </div>
        <hr className=" bg-blue-300 border-2 rounded-full border-slate-300" />
        <div className="grid sm:grid-cols-3 ">
          <Popover>
            <PopoverTrigger>
              <div className="bg-white rounded-xl pt-12 m-4 px-8 border-2 hover:bg-gray-100 hover:border-2 hover:border-white">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mb-4" src={Focus} />
                </div>
                <div className="text-xl font-bold pb-12">
                  Specific Focus on Team Engagement
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="rounded-xl">
              <div className="text-center text-xl font-semibold">
                Stands out by specifically focusing on team communication,
                collaboration, and engagement.
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="bg-white rounded-xl pt-12 m-4 px-8 border-2 hover:bg-gray-100 hover:border-2 hover:border-white">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mb-4" src={Features} />
                </div>
                <div className="text-xl font-bold pb-12">
                  Advanced Features and Simplicity
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="rounded-xl">
              <div className="text-center text-xl font-semibold">
                Offers features that foster participation, feedback, and
                community-building in a simple environment.
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="bg-white rounded-xl pt-12 m-4 px-8 border-2 hover:bg-gray-100 hover:border-2 hover:border-white">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mb-4" src={TailorMade} />
                </div>
                <div className="text-xl font-bold pb-4">
                  Tailored for Employee Feedback & Idea Generation
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="rounded-xl">
              <div className=" text-center text-xl font-semibold">
                Emphasizes gathering feedback and generating impactful ideas
                through structured processes.
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="bg-white rounded-xl pt-12 m-4 px-8 border-2 hover:bg-gray-100 hover:border-2 hover:border-white">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mb-4" src={Experience} />
                </div>
                <div className="text-xl font-bold pb-12">
                  Unique Customer Experience Focus
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="rounded-xl">
              <div className=" text-center text-xl font-semibold">
                Extends beyond internal engagement by addressing customer
                experience and solving problems.
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="bg-white rounded-xl pt-12 m-4 px-8 border-2 hover:bg-gray-100 hover:border-2 hover:border-white">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mb-4" src={CustomBuild} />
                </div>
                <div className="text-xl font-bold pb-12">
                  Custom-build Configuration
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="rounded-xl">
              <div className=" text-center text-xl font-semibold">
                Offers customization tailored to unique team structures,
                workflows, and engagement goals.
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="bg-white rounded-xl pt-12 m-4 px-8 hover:bg-gray-100 hover:border-2 hover:border-white">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mb-4" src={Discussion} />
                </div>
                <div className="text-xl font-bold pb-4">
                  Feedback and Engage in Meaningful Discussions
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="rounded-xl">
              <div className=" text-center text-xl font-semibold">
                Encourages adoption and involvement, leading to higher
                engagement within teams.
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
