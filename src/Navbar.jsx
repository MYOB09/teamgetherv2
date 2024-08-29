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
  const [isVissible, setIsVissible] = useState(false);
  const [isVissiblea, setIsVissiblea] = useState(false);
  let featuresRef = useRef();
  let industriesRef = useRef();

  function handleFeatures() {
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

  function handleIndustries() {
    setIsVissiblea(!isVissiblea);
  }

  useEffect(() => {
    let handler = (e) => {
      if (!industriesRef.current.contains(e.target)) {
        setIsVissiblea(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

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
            {/* <a href="/teamgetherv2/#/features"></a> */}
          </div>

          <NavLink
            to="/industries"
            className="aria-[current=page]:underline decoration-sky-300 hidden lg:block font-semibold hover:cursor-pointer hover:underline "
          >
            Industries
          </NavLink>
          {/* <div className="">Industries</div> */}
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
      <div
        className="bg-gray-50 rounded-xl top-0 flex  w-full "
        ref={featuresRef}
      >
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
              <div className="text-xl font-semibold">For Managers</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start px-8">
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">360 Evaluation</div>
                  Enables comprehensive performance appraisals, fostering
                  employee development.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">
                    Performance Feedback
                  </div>
                  Fosters community by sharing experiences and insights across
                  the organization.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">Talent Group</div>
                  Manages talent groups, identifying leaders and aligning growth
                  with goals.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">My Notes</div>
                  Keeps detailed notes, offering a clear, fact-based view of
                  each employee.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4 text-xs rounded-xl">
                  <div className=" text-lg text-sky-700 ">Ambassadors</div>
                  Empowers employee ambassadors to promote the organization and
                  boost engagement.
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold">Digital Space</div>
              <hr className=" border-2 rounded-full border-sky-300 mt-4 mx-12" />
              <div className="text-start px-8">
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs rounded-xl">
                  <div className=" text-lg  text-sky-700">Knowledge Base</div>
                  Enables comprehensive performance appraisals, fostering
                  employee development.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs rounded-xl">
                  <div className=" text-lg  text-sky-700">Document Storage</div>
                  Securely manages documents, enhancing collaboration and
                  ensuring compliance.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs rounded-xl">
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
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs rounded-xl">
                  <div className=" text-lg  text-sky-700">
                    Analytics and Reports
                  </div>
                  Generates insights and reports, aiding in data-driven
                  decision-making.
                </div>
                <div className="hover:bg-gray-100 hover:cursor-pointer p-2 m-4  text-xs rounded-xl">
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
      <div className="bg-gray-50   top-0 flex  w-full " ref={industriesRef}>
        {isVissiblea && (
          <div className=" grid grid-cols-3 w-full text-center p-4 my-4">
            <div
              className="m-2 hover:bg-gray-100 hover:cursor-pointer text-xs rounded-xl"
              rounded-xl
            >
              <div className="m-2 text-lg text-sky-700 pt-2 ">Healthcare</div>
              <div className="p-4 ">
                Streamline staff management, facilitate interdepartmental
                communication, and improve collaboration with tools like the
                Organizational Chart and Announcements. Leverage analytics to
                enhance service delivery.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2 ">
                Technology and Startups
              </div>
              <div className="p-4 ">
                Manage teams, share ideas, and foster innovation through
                Brainstorming and Chats. Document storage ensures information is
                accessible to all.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2 ">Retail</div>
              <div className="px-4 ">
                Strengthen communication between stores and headquarters,
                organize events, and recognize employees with awards. Use polls
                and feedback tools to improve customer service.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2 ">Chat</div>
              <div className="px-4 ">
                Facilitates real-time communication, improving teamwork and
                fostering belonging.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2 ">Construction</div>
              <div className="px-4 ">
                Organize projects, facilitate communication among project teams,
                and recognize field achievements. Goal and value management
                tools align teams with business objectives.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2 ">Banking</div>
              <div className="px-4 ">
                Improve team management and performance feedback, foster
                communication across branches, and track business goals. Utilize
                analytics for detailed financial reporting and executive
                reviews.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2">
                Non-Profit Orgaxnizations
              </div>
              <div className="p-4 ">
                Increase engagement with members, manage events, and encourage
                volunteer participation with recognitions and awards. Document
                storage and digital business cards help manage donor
                relationships.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2">Media</div>
              <div className="px-4 ">
                Enhance team collaboration, manage creative projects, and
                organize events. Use the Media Wall and Chats to share ideas and
                content. Recognize outstanding work with awards and badges.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer  text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2">B2B</div>
              <div className="px-4 ">
                Facilitate seamless communication between sales teams and
                management, manage performance feedback, and track client
                engagement. Utilize the Knowledge Base for sharing strategies
                and reporting tools for tracking business growth.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2">eCommerce</div>
              <div className="px-4 ">
                Enhance team collaboration, manage customer service teams, and
                organize promotional events. Use analytics to monitor sales
                performance and recognize top performers with awards and badges.
                Store and manage digital assets securely in Document Storage.
              </div>
            </div>
            <div className="m-2   hover:bg-gray-100 hover:cursor-pointer p-2 text-xs rounded-xl">
              <div className=" text-lg text-sky-700 pt-2">Insurance</div>
              <div className="px-4 ">
                Streamline internal communications, manage employee performance,
                and recognize achievements. Use analytics and reporting tools to
                track service delivery and client satisfaction.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
