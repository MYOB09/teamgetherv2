import Navbar from "@/Navbar";
import Contactus from "@/Contactus";
import Footer from "@/Footer";
import KnowledgeImg from "../assets/knowledgebase.png";
import StorageImg from "../assets/documentstorage.png";
import CardImg from "../assets/businessdigitalcard.png";

function DSpacePage() {
  return (
    <div>
      <Navbar />
      <div className="mt-2 text-center w-full" id="start">
        <div className="text-2xl font-bold text-4xl mb-4">Digital Space </div>
        <hr className=" bg-blue-300 border-2 rounded-full border-sky-300 " />
        <div className="grid auto-grid-auto sm:grid-cols-3 pt-4 px-12">
          <div className="text-center m-4 bg-gray-100 rounded-xl">
            <div className="flex justify-center ">
              <img src={KnowledgeImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">Knowledge Base</span>
            <div className="mt-2">
              Enables comprehensive performance appraisals, fostering employee
              development.
            </div>
          </div>
          <div className="text-center m-4 bg-gray-100 rounded-xl">
            <div className="flex justify-center ">
              <img src={StorageImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">Document Storage</span>
            <div className="mt-2">
              Securely manages documents, enhancing collaboration and ensuring
              compliance.
            </div>
          </div>
          <div className="text-center m-4 bg-gray-100 rounded-xl">
            <div className="flex justify-center ">
              <img src={CardImg} className="h-12 w-12 mb-4 mt-4" />
            </div>
            <span className="font-semibold text-2xl">
              Business Digital Card
            </span>
            <div className="mt-2">
              Creates digital cards, facilitating networking and simplifying
              communication.
            </div>
          </div>
        </div>
      </div>
      <Contactus />
      <Footer />
    </div>
  );
}

export default DSpacePage;
