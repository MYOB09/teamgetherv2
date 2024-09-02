import Navbar from "@/Navbar";
import Contactus from "@/Contactus";
import Footer from "@/Footer";

import React from "react";
import { useNavigate } from "react-router-dom";

import { CircleX, CircleChevronRight } from "lucide-react";

import BrainstormImg from "../assets/brainstorming.png";
import StoriesImg from "../assets/stories.png";
import AnnouncementsImg from "../assets/announcements.png";
import ChatImg from "../assets/chat.png";
import SurveysImg from "../assets/surveysandpolls.png";
import MediaImg from "../assets/mediawall.png";
import GoalsImg from "../assets/valuesandgoals.png";
import BadgesImg from "../assets/badgesandawards.png";
import EventsImg from "../assets/events.png";
import ErecognitionImg from "../assets/employeerecognition.png";
import VoiceImg from "../assets/yourvoice.png";
import ChartImg from "../assets/organizationalchart.png";

function EngagementPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="mt-2 text-center w-full ">
          <div className="text-4xl mb-4 font-bold ">
            <button className="text-red-500" onClick={() => navigate("/home")}>
              <CircleX />
            </button>{" "}
            Engagement{" "}
            <button
              className="text-sky-300"
              onClick={() => navigate("/managers")}
            >
              <CircleChevronRight />
            </button>
          </div>{" "}
          <hr className=" bg-blue-300 border-2 rounded-full border-sky-300 " />
          <div className="grid auto-grid-auto sm:grid-cols-4 pt-4 text-xl px-12">
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2 ">
              <div className="flex justify-center">
                <img src={BrainstormImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Brainstorming</span>
              <div className="mt-2">
                Encourages team idea generation and enhances collaboration and
                problem-solving.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={StoriesImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Stories</span>
              <div className="mt-2">
                Fosters community by sharing experiences and insights across the
                organization.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={AnnouncementsImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Announcements</span>
              <div className="mt-2">
                Enables real-time company-wide updates, ensuring timely
                communication and alignment.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={ChatImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Chat</span>
              <div className="mt-2">
                Facilitates real-time communication, improving teamwork and
                fostering belonging.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={SurveysImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Surveys and Polls</span>
              <div className="mt-2">
                Collects employee feedback for data-driven decision-making and
                sentiment analysis.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={MediaImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Media Wall</span>
              <div className="mt-2">
                Showcases multimedia content, boosting morale and celebrating
                achievements.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={GoalsImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Values and Goals</span>
              <div className="mt-2">
                Communicates core values and goals, enhancing purpose and
                alignment.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={BadgesImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Badges and Awards</span>
              <div className="mt-2">
                Recognizes achievements with virtual awards, promoting
                appreciation and motivation.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={EventsImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Events</span>
              <div className="mt-2">
                Provides an event calendar to keep employees informed and
                engaged.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={ErecognitionImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">
                Employee Recognition
              </span>
              <div className="mt-2">
                Establishes a platform for peer recognition, strengthening team
                morale.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={VoiceImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">Your Voice</span>
              <div className="mt-2">
                Offers a confidential channel for feedback, promoting openness
                and action.
              </div>
            </div>
            <div className="text-center m-4 bg-gray-100 rounded-xl p-2">
              <div className="flex justify-center ">
                <img src={ChartImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold text-2xl">
                Organizational Chart
              </span>
              <div className="mt-2">
                Visualizes hierarchy and roles, improving clarity and
                decision-making.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactus />
      <Footer />
    </div>
  );
}

export default EngagementPage;
