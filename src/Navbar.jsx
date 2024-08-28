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
import { useState } from "react";

function Navbar() {
  const [isVissible, setIsVissible] = useState(false);

  function handleVissible() {
    setIsVissible(!isVissible);
  }

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
          <li
            className="hidden sm:block font-semibold hover:cursor-pointer hover:text-sky-300 pt-4"
            onClick={handleVissible}
          >
            Features{/* <a href="/teamgetherv2/#/features">Features</a> */}
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
      <div className="bg-white  sticky top-0 flex  w-full ">
        {isVissible && (
          <div className="pl-12 flex w-full text-center">
            <div>
              <div className="text-xl font-semibold">Engagement</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12 " />
              <div className="text-start p-8">
                <div className="font-semibold">
                  Encourages team idea generation and enhances collaboration and
                  problem-solving.
                </div>
                <div className="pt-2 font-semibold">
                  Fosters community by sharing experiences and insights across
                  the organization.
                </div>
                <div className="pt-2 font-semibold">
                  Enables real-time company-wide updates, ensuring timely
                  communication and alignment.
                </div>
                <div className="pt-2 font-semibold">
                  Facilitates real-time communication, improving teamwork and
                  fostering belonging.
                </div>
                <div className="pt-2 font-semibold">
                  Collects employee feedback for data-driven decision-making and
                  sentiment analysis.
                </div>
                <div className="pt-2 font-semibold">
                  Showcases multimedia content, boosting morale and celebrating
                  achievements.
                </div>
                <div className="pt-2 font-semibold">
                  Communicates core values and goals, enhancing purpose and
                  alignment.
                </div>
                <div className="pt-2 font-semibold">
                  Recognizes achievements with virtual awards, promoting
                  appreciation and motivation.
                </div>
                <div className="pt-2 font-semibold">
                  Provides an event calendar to keep employees informed and
                  engaged.
                </div>
                <div className="pt-2 font-semibold">
                  Establishes a platform for peer recognition, strengthening
                  team morale.
                </div>
                <div className="pt-2 font-semibold">
                  Offers a confidential channel for feedback, promoting openness
                  and action.
                </div>
                <div className="pt-2 font-semibold">
                  Visualizes hierarchy and roles, improving clarity and
                  decision-making.
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold">For Managers</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start p-8">
                <div className="font-semibold">
                  Enables comprehensive performance appraisals, fostering
                  employee development.
                </div>
                <div className="pt-2 font-semibold">
                  Fosters community by sharing experiences and insights across
                  the organization.
                </div>
                <div className="pt-2 font-semibold">
                  Manages talent groups, identifying leaders and aligning growth
                  with goals.
                </div>
                <div className="pt-2 font-semibold">
                  Keeps detailed notes, offering a clear, fact-based view of
                  each employee.
                </div>
                <div className="pt-2 font-semibold">
                  Empowers employee ambassadors to promote the organization and
                  boost engagement.
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold">Digital Space</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start p-8">
                <div className="font-semibold">
                  Enables comprehensive performance appraisals, fostering
                  employee development.
                </div>
                <div className="pt-2 font-semibold">
                  Securely manages documents, enhancing collaboration and
                  ensuring compliance.
                </div>
                <div className="pt-2 font-semibold">
                  Creates digital cards, facilitating networking and simplifying
                  communication.
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold">Reporting</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start p-8">
                <div className="font-semibold">
                  Generates insights and reports, aiding in data-driven
                  decision-making.
                </div>
                <div className="pt-2 font-semibold">
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
