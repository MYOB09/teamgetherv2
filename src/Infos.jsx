import Use from "./Use";
import { MessageCircleWarning } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import "bootstrap/dist/css/bootstrap.css";

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
        <div className="bg-sky-300 rounded-xl">
          <div className="m-4  text-center bg-sky-300 rounded-xl">
            <div className="text-4xl p-2 font-bold"> About Us</div>
            <div className="p-2">
              At Teamgether, we are dedicated to revolutionizing the way
              businesses engage with their teams. Founded on the belief that
              effective communication and employee engagement are the keys to
              organizational success, we have developed a platform that
              integrates seamlessly into a variety of industries, offering
              tailored solutions that address the unique needs of each sector.
            </div>
          </div>
          <div className="grid lg:grid-cols-4 ">
            <div className="m-4 p-2 text-center bg-gray-200 rounded-xl">
              <div className="text-4xl p-4 text-muted">What We Do</div>
              <div className="">
                Teamgether provides a robust set of tools that cover the full
                spectrum of employee engagement and management. Whether you are
                in insurance, media, banking, B2B, eCommerce, or any other
                sector, our platform offers features that help streamline
                communication, foster team integration, and enhance overall
                efficiency. From performance feedback systems and talent
                management groups to digital collaboration spaces and detailed
                analytics, we provide everything your organization needs to
                build a motivated, cohesive, and high-performing team.
              </div>
            </div>
            <div className="m-4 p-2 text-center bg-gray-200 rounded-xl">
              <div className="text-4xl p-4">Our Vision</div>
              <div>
                We envision a world where every employee feels valued, every
                voice is heard, and every team is aligned with their
                organization’s goals. Our platform is designed to create an
                environment where collaboration thrives, innovation is
                encouraged, and achievements are recognized.
              </div>
            </div>

            <div className="m-4 p-2 text-center bg-gray-200 rounded-xl">
              <div className="text-4xl p-4">Why Choose Us?</div>
              <div className="">
                Our platform stands out because of its adaptability and
                user-centric design. We don’t believe in a one-size-fits-all
                approach. Instead, we work closely with our clients to ensure
                that Teamgether meets their specific needs, helping them
                overcome industry-specific challenges and achieve their unique
                business objectives. Our commitment to excellence means that we
                are constantly updating and refining our platform to incorporate
                the latest trends in employee engagement and management.
              </div>
            </div>
            <div className="m-4 p-2 text-center bg-gray-200 rounded-xl">
              <div className="text-4xl p-4">Our Commitment</div>
              <div>
                We are more than just a software provider; we are your partners
                in building a better workplace. Our team of experts is always
                available to provide support, offer insights, and help you get
                the most out of our platform. We are driven by our passion for
                helping businesses grow by unlocking the full potential of their
                teams.
              </div>
            </div>
          </div>
          <div className="m-4 p-2 text-center bg-sky-300 rounded-xl">
            <div className="text-4xl p-4">Join Us</div>
            <div>
              Join the growing number of organizations that trust Teamgether to
              transform their workplace culture and improve their team’s
              performance. Together, we can create an environment where your
              employees are not just workers, but active contributors to your
              company’s success.
            </div>
          </div>
        </div>
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
        <div className="bg-gray-50 mt-8 mb-8 rounded-xl " id="faq">
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
              <AccordionTrigger className="text-xl font-semibold">
                - What is Teamgether?
              </AccordionTrigger>
              <AccordionContent className=" px-4">
                Teamgether is an app providing quick communication capabilities
                among team members to solve problems, exchange ideas, and share
                common issues through a secure environment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                - What are the key features of Teamgether?
              </AccordionTrigger>
              <AccordionContent className=" px-4 ">
                Teamgether offers features like Announcements, Chat, Polling,
                Members List, Security, Notifications, Ideas, Graphs, Personal
                Profile, and Data Export, among others.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                - How does Teamgether enhance employee engagement?
              </AccordionTrigger>
              <AccordionContent className=" px-4 ">
                Teamgether enables employees to participate in chats, polls, and
                idea sharing, while administrators can manage announcements,
                discussions, and feedback collection, fostering a culture of
                active participation and collaboration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold">
                - Is Teamgether customizable?
              </AccordionTrigger>
              <AccordionContent className=" px-4 ">
                Yes, Teamgether offers customization options tailored to the
                specific needs and objectives of a company or association,
                aligning with unique team structures and workflows.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold">
                - How does Teamgether address customer experience?
              </AccordionTrigger>
              <AccordionContent className=" px-4 ">
                Teamgether extends beyond internal team engagement by providing
                specific features for addressing customer experience issues,
                enabling companies to leverage employee insights to solve
                customer problems and shape customer journeys.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl font-semibold">
                - What kind of rewards and incentives does Teamgether offer?
              </AccordionTrigger>
              <AccordionContent className=" px-4 ">
                Teamgether includes reward plans that motivate and encourage
                participation by recognizing and valuing contributions,
                fostering healthy competition, and enhancing member satisfaction
                and retention.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl font-semibold">
                - How does Teamgether ensure data security and compliance?
              </AccordionTrigger>
              <AccordionContent className=" px-4 ">
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
