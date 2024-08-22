import { Brain } from "lucide-react";
import BrainstormImg from "./assets/brainstorming.png";

function Infos() {
  return (
    <div>
      <div className="flex flex-col m-12">
        <div className="mt-2 bg-slate-100 text-center w-full rounded-xl">
          <div className="text-2xl font-bold pt-4 pb-4">Why us? </div>
          <hr className=" bg-blue-300 border-2 rounded-full border-slate-300" />
          <div className="pt-4">
            <div className="text-xl font-semibold">
              1. Specific Focus on Team Engagement
            </div>
            <div className="pt-2">
              Stands out by specifically focusing on team communication,
              collaboration, and engagement.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              2. Advanced Features and Simplicity
            </div>
            <div className="pt-2">
              Offers features that foster participation, feedback, and
              community-building in a simple environment.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              3. Tailored for Employee Feedback & Idea Generation
            </div>
            <div className="pt-2">
              Emphasizes gathering feedback and generating impactful ideas
              through structured processes.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              4. Unique Customer Experience Focus
            </div>
            <div className="pt-2">
              Extends beyond internal engagement by addressing customer
              experience and solving problems.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              5. Custom-build Configuration
            </div>
            <div className="pt-2">
              Offers customization tailored to unique team structures,
              workflows, and engagement goals.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              6. Feedback and Engage in Meaningful Discussions
            </div>
            <div className="pt-2 pb-6">
              Encourages adoption and involvement, leading to higher engagement
              within teams.
            </div>
          </div>
        </div>
        <div className="mt-2 text-center w-full">
          <span className="text-2xl font-bold ">Engagement </span>
          <hr className=" bg-blue-300 border-2 rounded-full border-sky-300" />
          <div className="grid auto-grid-auto sm:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center ">
                <img src={BrainstormImg} className="h-12 w-12 mb-4 mt-4" />
              </div>
              <span className="font-semibold">Brainstorming</span>
              <div className="mt-2">
                Encourages team idea generation and enhances collaboration and
                problem-solving.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/stories.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Stories</span>
              <div className="mt-2">
                Fosters community by sharing experiences and insights across the
                organization.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/announcements.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Announcements</span>
              <div className="mt-2">
                Enables real-time company-wide updates, ensuring timely
                communication and alignment.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/chat.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Chat</span>
              <div className="mt-2">
                Facilitates real-time communication, improving teamwork and
                fostering belonging.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/surveysandpolls.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Surveys and Polls</span>
              <div className="mt-2">
                Collects employee feedback for data-driven decision-making and
                sentiment analysis.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/mediawall.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Media Wall</span>
              <div className="mt-2">
                Showcases multimedia content, boosting morale and celebrating
                achievements.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/valuesandgoals.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Values and Goals</span>
              <div className="mt-2">
                Communicates core values and goals, enhancing purpose and
                alignment.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/badgesandawards.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Badges and Awards</span>
              <div className="mt-2">
                Recognizes achievements with virtual awards, promoting
                appreciation and motivation.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/events.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Events</span>
              <div className="mt-2">
                Provides an event calendar to keep employees informed and
                engaged.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/employeerecognition.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Employee Recognition</span>
              <div className="mt-2">
                Establishes a platform for peer recognition, strengthening team
                morale.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/yourvoice.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Your Voice</span>
              <div className="mt-2">
                Offers a confidential channel for feedback, promoting openness
                and action.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/organizationalchart.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Organizational Chart</span>
              <div className="mt-2">
                Visualizes hierarchy and roles, improving clarity and
                decision-making.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center w-full">
          <span className="text-2xl font-bold ">For Managers </span>
          <hr className=" bg-blue-300 border-2 rounded-full border-sky-300" />
          <div className="grid auto-grid-auto sm:grid-cols-5">
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/360evaluation.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">360 Evaluation</span>
              <div className="mt-2">
                Enables comprehensive performance appraisals, fostering employee
                development.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/performancefeedback.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Performance Feedback</span>
              <div className="mt-2">
                Fosters community by sharing experiences and insights across the
                organization.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/announcements.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Talent Group</span>
              <div className="mt-2">
                Manages talent groups, identifying leaders and aligning growth
                with goals.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/chat.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">My Notes</span>
              <div className="mt-2">
                Keeps detailed notes, offering a clear, fact-based view of each
                employee.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/surveysandpolls.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Ambassadors</span>
              <div className="mt-2">
                Empowers employee ambassadors to promote the organization and
                boost engagement.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center w-full">
          <span className="text-2xl font-bold ">Digital Space </span>
          <hr className=" bg-blue-300 border-2 rounded-full border-sky-300" />
          <div className="grid auto-grid-auto sm:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/knowledgebase.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Knowledge Base</span>
              <div className="mt-2">
                Enables comprehensive performance appraisals, fostering employee
                development.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/documentstorage.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Document Storage</span>
              <div className="mt-2">
                Securely manages documents, enhancing collaboration and ensuring
                compliance.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/businessdigitalcard.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Business Digital Card</span>
              <div className="mt-2">
                Creates digital cards, facilitating networking and simplifying
                communication.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center w-full">
          <span className="text-2xl font-bold ">Reporting </span>
          <hr className=" bg-blue-300 border-2 rounded-full border-sky-300" />
          <div className="grid auto-grid-auto sm:grid-cols-2">
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/analyticsandreports.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">Analytics and Reports</span>
              <div className="mt-2">
                Generates insights and reports, aiding in data-driven
                decision-making.
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center ">
                <img
                  src="./src/assets/xlextractofreports.png"
                  className="h-12 w-12 mb-4 mt-4"
                />
              </div>
              <span className="font-semibold">XL Extract of Reports</span>
              <div className="mt-2">
                Exports comprehensive data in Excel for in-depth analysis and
                presentation.
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4 bg-slate-100 text-center w-full rounded-xl">
          <div className="text-2xl font-bold pt-4 pb-4">
            Frequently Asked Questions
          </div>
          <hr className=" bg-blue-300 border-2 rounded-full border-slate-300" />
          <div className="pt-4">
            <div className="text-xl font-semibold">- What is Teamgether?</div>

            <div className="pt-2">
              Teamgether is an app providing quick communication capabilities
              among team members to solve problems, exchange ideas, and share
              common issues through a secure environment.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              - What are the key features of Teamgether?
            </div>

            <div className="pt-2">
              Teamgether offers features like Announcements, Chat, Polling,
              Members List, Security, Notifications, Ideas, Graphs, Personal
              Profile, and Data Export, among others.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              - How does Teamgether enhance employee engagement?
            </div>

            <div className="pt-2">
              Teamgether enables employees to participate in chats, polls, and
              idea sharing, while administrators can manage announcements,
              discussions, and feedback collection, fostering a culture of
              active participation and collaboration.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              - Is Teamgether customizable?
            </div>

            <div className="pt-2">
              Yes, Teamgether offers customization options tailored to the
              specific needs and objectives of a company or association,
              aligning with unique team structures and workflows.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              - How does Teamgether address customer experience?
            </div>

            <div className="pt-2">
              Teamgether extends beyond internal team engagement by providing
              specific features for addressing customer experience issues,
              enabling companies to leverage employee insights to solve customer
              problems and shape customer journeys.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              - What kind of rewards and incentives does Teamgether offer?
            </div>

            <div className="pt-2">
              Teamgether includes reward plans that motivate and encourage
              participation by recognizing and valuing contributions, fostering
              healthy competition, and enhancing member satisfaction and
              retention.
            </div>
          </div>
          <div className="pt-4">
            <div className="text-xl font-semibold">
              - How does Teamgether ensure data security and compliance?
            </div>

            <div className="pt-2 pb-6">
              Teamgether is GDPR compliant and operates servers in the EU to
              ensure data protection. It also allows administrators to control
              and manage user access, ensuring a secure environment for team
              communication and collaboration.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infos;
