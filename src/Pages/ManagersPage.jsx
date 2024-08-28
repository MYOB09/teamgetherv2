import Navbar from "@/Navbar";
import Contactus from "@/Contactus";
import Footer from "@/Footer";

import PerformanceImg from "../assets/performancefeedback.png";
import EvaluationImg from "../assets/360evaluation.png";
import NotesImg from "../assets/mynotes.png";
import TalentImg from "../assets/talentgroup.png";
import SurveysImg from "../assets/surveysandpolls.png";

function ManagersPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-2 text-center w-full">
        <div className="text-4xl font-bold mb-4">For Managers </div>
        <hr className=" bg-blue-300 border-2 rounded-full border-sky-300 " />
        <div className="grid auto-grid-auto sm:grid-cols-5 pt-4">
          <div className="text-center">
            <div className="flex justify-center ">
              <img src={EvaluationImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">360 Evaluation</span>
            <div className="mt-2">
              Enables comprehensive performance appraisals, fostering employee
              development.
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center ">
              <img src={PerformanceImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">Performance Feedback</span>
            <div className="mt-2">
              Fosters community by sharing experiences and insights across the
              organization.
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center ">
              <img src={TalentImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">Talent Group</span>
            <div className="mt-2">
              Manages talent groups, identifying leaders and aligning growth
              with goals.
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center ">
              <img src={NotesImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">My Notes</span>
            <div className="mt-2">
              Keeps detailed notes, offering a clear, fact-based view of each
              employee.
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center ">
              <img src={SurveysImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">Ambassadors</span>
            <div className="mt-2">
              Empowers employee ambassadors to promote the organization and
              boost engagement.
            </div>
          </div>
        </div>
      </div>
      <Contactus />
      <Footer />
    </div>
  );
}

export default ManagersPage;
