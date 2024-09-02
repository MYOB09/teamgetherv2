import Navbar from "@/Navbar";
import Contactus from "@/Contactus";
import Footer from "@/Footer";

import AnalyticsImg from "../assets/analyticsandreports.png";
import XlImg from "../assets/xlextractofreports.png";

import { useNavigate } from "react-router-dom";

import { CircleChevronLeft, CircleX } from "lucide-react";

function ReportingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="p-4 mt-2 text-center w-full">
        <div className="text-4xl font-bold mb-4">
          <button
            className="text-sky-300"
            onClick={() => navigate("/digitalspace")}
          >
            <CircleChevronLeft />
          </button>{" "}
          Reporting{" "}
          <button className="text-red-500" onClick={() => navigate("/home")}>
            <CircleX />
          </button>
        </div>
        <hr className=" bg-blue-300 border-2 rounded-full border-sky-300  " />
        <div className="grid auto-grid-auto sm:grid-cols-2 pt-4 px-12">
          <div className="text-center m-4 bg-gray-100 p-4 rounded-xl">
            <div className="flex justify-center ">
              <img src={AnalyticsImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">
              Analytics and Reports
            </span>
            <div className="mt-2">
              Generates insights and reports, aiding in data-driven
              decision-making.
            </div>
          </div>
          <div className="text-center m-4 bg-gray-100 p-4 rounded-xl">
            <div className="flex justify-center ">
              <img src={XlImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">
              XL Extract of Reports
            </span>
            <div className="mt-2">
              Exports comprehensive data in Excel for in-depth analysis and
              presentation.
            </div>
          </div>
        </div>
      </div>
      <Contactus />
      <Footer />
    </div>
  );
}
export default ReportingPage;
