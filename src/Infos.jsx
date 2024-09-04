import Use from "./Use";
import { MessageCircleWarning } from "lucide-react";
import "bootstrap/dist/css/bootstrap.css";
import About from "./assets/information.png";
import WhatweDo from "./assets/suitcase.png";
import choose from "./assets/directions.png";
import Commitment from "./assets/hand-shake.png";
import Vision from "./assets/target.png";

function Infos() {
  return (
    <div>
      <div className="flex flex-col m-12">
        <div className=" rounded-xl">
          <div className="m-4  text-center  rounded-xl">
            <div className="text-4xl p-2 font-bold inline-flex">
              <div className="w-12 h-12">
                <img src={About} />{" "}
              </div>
              &nbsp;About Us
            </div>
            <div className="p-2">
              At Teamgether, we are dedicated to revolutionizing the way
              businesses engage with their teams. Founded on the belief that
              effective communication and employee engagement are the keys to
              organizational success, we have developed a platform that
              integrates seamlessly into a variety of industries, offering
              tailored solutions that address the unique needs of each sector.
            </div>
          </div>
          <div className="flex-auto ">
            <div className="m-4 p-2   rounded-xl ">
              <div className="text-4xl p-4 inline-flex ">
                <div className="w-8 h-8">
                  <img src={WhatweDo} />
                </div>
                &nbsp;What We Do
              </div>
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
            <div className="m-4 p-2  rounded-xl ">
              <div className="text-4xl p-4 inline-flex">
                <div className="w-8 h-8">
                  <img src={Vision} />
                </div>
                &nbsp;Our Vision
              </div>
              <div>
                We envision a world where every employee feels valued, every
                voice is heard, and every team is aligned with their
                organization’s goals. Our platform is designed to create an
                environment where collaboration thrives, innovation is
                encouraged, and achievements are recognized.
              </div>
            </div>

            <div className="m-4 p-2  rounded-xl ">
              <div className="text-4xl p-4 inline-flex">
                <div className="w-8 h-8">
                  {" "}
                  <img src={choose} />
                </div>
                &nbsp;Why Choose Us?
              </div>
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
            <div className="m-4 p-2  rounded-xl ">
              <div className="text-4xl p-4 inline-flex">
                <div className="w-8 h-8">
                  <img src={Commitment} />
                </div>
                &nbsp;Our Commitment
              </div>
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
          <div className="m-4 p-2 text-center rounded-xl ">
            <div className="text-4xl p-4 -mt-4 underline">Join Us</div>
            <div>
              Join the growing number of organizations that trust Teamgether to
              transform their workplace culture and improve their team’s
              performance. Together, we can create an environment where your
              employees are not just workers, but active contributors to your
              company’s success.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infos;
