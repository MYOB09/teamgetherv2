import Engage from "./assets/engagement.svg";
import Manage from "./assets/management.svg";
import Reports from "./assets/business.svg";
import DSpace from "./assets/sharing.svg";

function Teaser() {
  return (
    <div className=" rounded-xl bg-sky-100 ">
      <div className="text-center bg-white font-semibold text-4xl py-4">
        Empower Your <span className="text-sky-300 font-bold">Employees</span>{" "}
        with Team
        <span className="text-sky-300 font-bold">g</span>ether
      </div>
      <div className="py-4 grid sm:grid-cols-2 mx-4 rounded-full pb-12 bg-sky-300">
        <a href="/teamgetherv2/#/engagement" className="">
          <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-black hover:cursor-pointer">
            <div className="flex justify-center ">
              <img src={Engage} className="w-12 h-12 " />
            </div>
            <div className="text-xl font-bold pt-4 pb-4">Engagement </div>
            <hr className="  border-2 rounded-full border-black" />
            <p className="pt-4 font-semibold">
              Engage your employees and build a strong company culture
            </p>
          </div>
        </a>
        <a href="/teamgetherv2/#/managers" className="">
          <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-gray-100">
            <div className="flex justify-center">
              <img src={Manage} className="w-12 h-12 " />
            </div>
            <div className="text-xl font-bold pt-4 pb-4"> Managers </div>
            <hr className="  border-2 rounded-full border-black" />
            <p className="pt-4 font-semibold">
              Manage communication, performance and culture in one platform
            </p>
          </div>
        </a>
        <a href="/teamgetherv2/#/digitalspace" className="">
          <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-gray-100 ">
            <div className="flex justify-center">
              <img src={DSpace} className="w-12 h-12 " />
            </div>
            <div className="text-xl font-bold pt-4 pb-4">Digital Space </div>
            <hr className="  border-2 rounded-full border-black" />
            <p className="pt-4 font-semibold ">
              Securely manages documents, enhancing collaboration and ensuring
              compliance.
            </p>
          </div>
        </a>
        <a href="/teamgetherv2/#/reporting" className="">
          <div className="bg-white mx-12 rounded-xl mt-8 p-12 text-center hover:cursor-pointer hover:bg-gray-100">
            <div className="flex justify-center">
              <img src={Reports} className="w-12 h-12 " />
            </div>
            <div className="text-xl font-bold pt-4 pb-4">Reporting</div>
            <hr className="  border-2 rounded-full border-black" />
            <p className="pt-4 font-semibold ">
              Generates insights and reports, aiding in data-driven
              decision-making.
            </p>
          </div>
        </a>
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
