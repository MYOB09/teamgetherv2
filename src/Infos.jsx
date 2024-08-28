import Use from "./Use";
import { MessageCircleWarning } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import FAQ from "./assets/faq.svg";
import WhyUs from "./assets/problem.svg";
import Focus from "./assets/focuspeople.svg";
import Features from "./assets/features.svg";
import TailorMade from "./assets/measuring.svg";
import Experience from "./assets/trustworthiness.svg";
import CustomBuild from "./assets/build.svg";
import Discussion from "./assets/message.svg";

function Infos() {
  return (
    <div>
      <div className="flex flex-col m-12">
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
                  <div className="text-xl font-bold pb-12">
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
                <div className="bg-white rounded-xl pt-12 m-4 px-8 hover:bg-gray-100 hover:border-2 hover:border-white">
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
                  <div className="text-xl font-bold pb-12">
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
        <div className="bg-sky-300 mt-8 mb-8 rounded-xl " id="faq">
          <div className="flex justify-center">
            <img src={FAQ} className="w-16 h-16" />
            <div className="text-4xl font-bold pt-4 pb-4 hidden sm:inline">
              &nbsp;Frequently Asked Questions
            </div>
            <div className="text-4xl font-bold pt-4 pb-4  sm:hidden">
              &nbsp;FAQ
            </div>
          </div>
          <hr className=" bg-white border-2 rounded-full border-white" />
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-semibold">
                - What is Teamgether?
              </AccordionTrigger>
              <AccordionContent className="text-xl p-12">
                Teamgether is an app providing quick communication capabilities
                among team members to solve problems, exchange ideas, and share
                common issues through a secure environment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl font-semibold">
                - What are the key features of Teamgether?
              </AccordionTrigger>
              <AccordionContent className="text-xl p-12 ">
                Teamgether offers features like Announcements, Chat, Polling,
                Members List, Security, Notifications, Ideas, Graphs, Personal
                Profile, and Data Export, among others.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl font-semibold">
                - How does Teamgether enhance employee engagement?
              </AccordionTrigger>
              <AccordionContent className="text-xl p-12 ">
                Teamgether enables employees to participate in chats, polls, and
                idea sharing, while administrators can manage announcements,
                discussions, and feedback collection, fostering a culture of
                active participation and collaboration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl font-semibold">
                - Is Teamgether customizable?
              </AccordionTrigger>
              <AccordionContent className="text-xl p-12 ">
                Yes, Teamgether offers customization options tailored to the
                specific needs and objectives of a company or association,
                aligning with unique team structures and workflows.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-2xl font-semibold">
                - How does Teamgether address customer experience?
              </AccordionTrigger>
              <AccordionContent className="text-xl p-12 ">
                Teamgether extends beyond internal team engagement by providing
                specific features for addressing customer experience issues,
                enabling companies to leverage employee insights to solve
                customer problems and shape customer journeys.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-2xl font-semibold">
                - What kind of rewards and incentives does Teamgether offer?
              </AccordionTrigger>
              <AccordionContent className="text-xl p-12 ">
                Teamgether includes reward plans that motivate and encourage
                participation by recognizing and valuing contributions,
                fostering healthy competition, and enhancing member satisfaction
                and retention.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-2xl font-semibold">
                - How does Teamgether ensure data security and compliance?
              </AccordionTrigger>
              <AccordionContent className="text-xl p-12 ">
                Teamgether is GDPR compliant and operates servers in the EU to
                ensure data protection. It also allows administrators to control
                and manage user access, ensuring a secure environment for team
                communication and collaboration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Infos;
