import Engage from "./assets/engagement.svg";
import Manage from "./assets/management.svg";
import Reports from "./assets/business.svg";
import DSpace from "./assets/sharing.svg";
import { Button } from "./components/ui/button";

function Teaser() {
  return (
    <div className=" rounded-xl bg-sky-100 ">
      <div className="py-4 grid sm:grid-cols-2 mx-4 rounded-full pb-12">
        <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-gray-100 hover:cursor-pointer hover:bg-gray-100">
          <div className="flex justify-center ">
            <img src={Engage} className="w-12 h-12 " />
          </div>
          <div className="text-2xl font-bold pt-4  pb-4">Engagement </div>
          <hr className="  border-2 rounded-full border-black" />
          <p className="pt-4 font-semibold">
            Encourages team idea generation and enhances collaboration and
            problem-solving.
          </p>
        </div>
        <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-gray-100">
          <div className="flex justify-center">
            <img src={Manage} className="w-12 h-12 " />
          </div>
          <div className="text-2xl font-bold pt-4 pb-4">For Managers </div>
          <hr className="  border-2 rounded-full border-black" />
          <p className="pt-4 font-semibold">
            Enables comprehensive performance appraisals, fostering employee
            development.
          </p>
        </div>
        <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-gray-100">
          <div className="flex justify-center">
            <img src={DSpace} className="w-12 h-12 " />
          </div>
          <div className="text-2xl font-bold pt-4 pb-4">Digital Space </div>
          <hr className="  border-2 rounded-full border-black" />
          <p className="pt-4 font-semibold ">
            Securely manages documents, enhancing collaboration and ensuring
            compliance.
          </p>
        </div>
        <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-gray-100">
          <div className="flex justify-center">
            <img src={Reports} className="w-12 h-12 " />
          </div>
          <div className="text-2xl font-bold pt-4 pb-4">Reporting</div>
          <hr className="  border-2 rounded-full border-black" />
          <p className="pt-4 font-semibold mb-12">
            Generates insights and reports, aiding in data-driven
            decision-making.
          </p>
        </div>
      </div>
      <div className="text-center">
        {/* <a href="/teamgetherv2/#/features">
          <Button className="bg-sky-500 px-12 mb-4 hover:bg-sky-300 text-2xl  ">
            Learn More
          </Button>
        </a> */}
      </div>
    </div>
  );
}

export default Teaser;
