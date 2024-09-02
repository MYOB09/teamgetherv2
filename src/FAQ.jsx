import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import FA from "./assets/faq.svg";

function FAQ() {
  return (
    <div className="bg-gray-50 mt-8 mb-8 rounded-xl " id="faq">
      <div className="flex justify-center">
        <img src={FA} className="w-16 h-16" />
        <div className="text-4xl font-bold pt-4 pb-4 hidden sm:inline">
          &nbsp;Frequently Asked Questions
        </div>
        <div className="text-4xl font-bold pt-4 pb-4  sm:hidden">&nbsp;FAQ</div>
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
            discussions, and feedback collection, fostering a culture of active
            participation and collaboration.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold">
            - Is Teamgether customizable?
          </AccordionTrigger>
          <AccordionContent className=" px-4 ">
            Yes, Teamgether offers customization options tailored to the
            specific needs and objectives of a company or association, aligning
            with unique team structures and workflows.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold">
            - How does Teamgether address customer experience?
          </AccordionTrigger>
          <AccordionContent className=" px-4 ">
            Teamgether extends beyond internal team engagement by providing
            specific features for addressing customer experience issues,
            enabling companies to leverage employee insights to solve customer
            problems and shape customer journeys.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl font-semibold">
            - What kind of rewards and incentives does Teamgether offer?
          </AccordionTrigger>
          <AccordionContent className=" px-4 ">
            Teamgether includes reward plans that motivate and encourage
            participation by recognizing and valuing contributions, fostering
            healthy competition, and enhancing member satisfaction and
            retention.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-xl font-semibold">
            - How does Teamgether ensure data security and compliance?
          </AccordionTrigger>
          <AccordionContent className=" px-4 ">
            Teamgether is GDPR compliant and operates servers in the EU to
            ensure data protection. It also allows administrators to control and
            manage user access, ensuring a secure environment for team
            communication and collaboration.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;
