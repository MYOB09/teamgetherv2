import Use from "./Use";

function Infos() {
  return (
    <div>
      <div className="flex flex-col m-12">
        <div className="mt-2 bg-slate-100 text-center w-full rounded-xl p-4">
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
        <Use />
        <div
          className=" mt-4 bg-slate-100 text-center w-full rounded-xl p-4"
          id="faq"
        >
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
