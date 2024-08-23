import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";

function MainContent() {
  return (
    <div>
      <div className="bg-gray-100 m-12 rounded-xl">
        <div className="flex justify-center">
          {/* <img className="h-24 sm:h-40 " src={TeamgetherLogo} /> */}
          <span className="font-semibold text-4xl text-blue-950">
            Team<span className="text-blue-300 font-bold">g</span>ether
          </span>
        </div>
        <p className="text-center text-2xl font-semibold p-6">
          is an app providing engagement, genification and interaction to
          increase team productivity
        </p>
        <div className="text-center">
          <a href="/teamgetherv2/#/features">
            <Button className="bg-sky-500 px-12 mb-4 hover:bg-sky-300">
              Learn More
            </Button>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-4 m-12 ">
        <div className="bg-sky-300 rounded-full w-full sm:w-6/12  text-center space-y-6 font-semibold p-12">
          <div className="text-xl">
            <p className="text-white">
              Using <span className=" font-bold">Teamgether</span>?
              <br />
              Enter your Company ID here
            </p>
          </div>
          <div className="flex justify-end">
            <div className="absolute  hover:cursor-pointer hover:text-sky-300  text-black m-1  rounded-full  mt-7  ">
              <ArrowRight size={26} />
            </div>
          </div>
          <div className=" container bg-white rounded-xl w-full mx-auto rounded-xl w-full ring-1 focus-within:ring-2 ring-sky-800 focus-within:ring-sky-800">
            <input
              className=" p-1 rounded-xl w-full focus:outline-none ring-0 focus:ring-0 "
              type="text"
              placeholder="Company ID"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
