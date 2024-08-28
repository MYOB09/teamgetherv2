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

function Navbar() {
  const [isVissible, setIsVissible] = useState(false);
  const [isVissiblea, setIsVissiblea] = useState(false);
  let featuresRef = useRef();

  function handleVissible() {
    setIsVissible(!isVissible);
  }

  useEffect(() => {
    let handler = (e) => {
      if (!featuresRef.current.contains(e.target)) {
        setIsVissible(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="sticky top-0">
      <div className="bg-white items-center sticky top-0 flex justify-between w-full h-24">
        <div>
          <a href="/teamgetherv2/#/home">
            <img
              className=" h-12 sm:block sm:h-24 sm:w-auto hover:cursor-pointer"
              src={TeamgetherLogo}
            ></img>
          </a>
        </div>
        <ul className="inline-flex space-x-4 sm:space-x-12 text-xs sm:text-lg ">
          <li
            className="hidden sm:block font-semibold hover:cursor-pointer hover:text-sky-300 pt-4 active:text-sky-500 "
            onClick={handleVissible}
          >
            <div className="">
              Features{/* <a href="/teamgetherv2/#/features">Features</a> */}
            </div>
          </li>
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
          <li className="font-semibold hover:cursor-pointer hover:text-blue-800 pt-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-sky-300 border-2 border-white text-white hover:text-sky-300 hover:bg-white hover:border-2 hover:border-sky-300"
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
      <div className="bg-white   top-0 flex  w-full " ref={featuresRef}>
        {isVissible && (
          <div className=" flex w-full text-center">
            <div>
              <div className="text-xl font-semibold">Engagement</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12 mb-0" />
              <div className="text-start px-8">
                <div
                  className="m-4   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl"
                  rounded-xl
                >
                  <div className=" text-lg text-sky-700 ">Brainstorming</div>
                  Encourages team idea generation and enhances collaboration and
                  problem-solving.
                </div>
                <div className="m-4   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">Stories</div>
                  Fosters community by sharing experiences and insights across
                  the organization.
                </div>
                <div className="m-4   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">Announcements</div>
                  Enables real-time company-wide updates, ensuring timely
                  communication and alignment.
                </div>
                <div className="m-4   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">Chat</div>
                  Facilitates real-time communication, improving teamwork and
                  fostering belonging.
                </div>
                <div className="m-4   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">
                    Surveys and Polls
                  </div>
                  Collects employee feedback for data-driven decision-making and
                  sentiment analysis.
                </div>
                <div className="m-4   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">Media Wall</div>
                  Showcases multimedia content, boosting morale and celebrating
                  achievements.
                </div>
                {/* <div className="m-4   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
                  <div className=" text-xl">Values and Goals</div>
                  Communicates core values and goals, enhancing purpose and
                  alignment.
                </div> */}
                {/* <div className="m-4 text-xs  hover:bg-gray-100 hover:cursor-pointer p-2 ">
                  Recognizes achievements with virtual awards, promoting
                  appreciation and motivation.
                </div>
                <div className="m-4 text-xs  hover:bg-gray-100 hover:cursor-pointer p-2 ">
                  Provides an event calendar to keep employees informed and
                  engaged.
                </div>
                <div className="m-4 text-xs  hover:bg-gray-100 hover:cursor-pointer p-2 ">
                  Establishes a platform for peer recognition, strengthening
                  team morale.
                </div>
                <div className="m-4 text-xs  hover:bg-gray-100 hover:cursor-pointer p-2 ">
                  Offers a confidential channel for feedback, promoting openness
                  and action.
                </div>
                <div className="m-4 text-xs  hover:bg-gray-100 hover:cursor-pointer p-2 ">
                  Visualizes hierarchy and roles, improving clarity and
                  decision-making.
                </div> */}
              </div>
            </div>
            <div>
              <div className="text-xl ">For Managers</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start px-8">
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs">
                  <div className=" text-lg text-sky-700 ">360 Evaluation</div>
                  Enables comprehensive performance appraisals, fostering
                  employee development.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs">
                  <div className=" text-lg text-sky-700 ">
                    Performance Feedback
                  </div>
                  Fosters community by sharing experiences and insights across
                  the organization.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs">
                  <div className=" text-lg text-sky-700 ">Talent Group</div>
                  Manages talent groups, identifying leaders and aligning growth
                  with goals.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs">
                  <div className=" text-lg text-sky-700 ">My Notes</div>
                  Keeps detailed notes, offering a clear, fact-based view of
                  each employee.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs">
                  <div className=" text-lg text-sky-700 ">Ambassadors</div>
                  Empowers employee ambassadors to promote the organization and
                  boost engagement.
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl ">Digital Space</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start px-8">
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs">
                  <div className=" text-lg  text-sky-700">Knowledge Base</div>
                  Enables comprehensive performance appraisals, fostering
                  employee development.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs">
                  <div className=" text-lg  text-sky-700">Document Storage</div>
                  Securely manages documents, enhancing collaboration and
                  ensuring compliance.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs">
                  <div className=" text-lg  text-sky-700">
                    Business Digital Card
                  </div>
                  Creates digital cards, facilitating networking and simplifying
                  communication.
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold">Reporting</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start px-8">
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs">
                  <div className=" text-lg  text-sky-700">
                    Analytics and Reports
                  </div>
                  Generates insights and reports, aiding in data-driven
                  decision-making.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs">
                  <div className=" text-lg  text-sky-700">
                    XL Extract of Reports
                  </div>
                  Exports comprehensive data in Excel for in-depth analysis and
                  presentation.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
