import ContactImg from "./assets/contactus.png";
import { Button } from "./components/ui/button";
import Phone from "./assets/call.svg";
import Pin from "./assets/location.svg";
import Mail from "./assets/mail.svg";

function Contactus() {
  return (
    <div className=" ">
      <div className=" " id="contact">
        <div className="text-center pt-4">
          <span className="text-4xl font-semibold">Contact us</span>
        </div>
        {/* <div className="pt-12  mx-4 mt-12">
          <div className="text-xs   font-bold  text-black s">
            <div className="">
              <div className="text-center pt-8 flex flex-inline justify-center">
                <img className="w-8 h-8" src={Mail} />
                <div className="font-bold ">Online Services Email:</div>
              </div>
              <div className="text-center  font-semibold">
                support@teamgether.com
              </div>

              <div className="text-center pt-8 flex flex-inline justify-center">
                <img className="w-8 h-8" src={Phone} />
                <div className="font-bold ">
                  Phone <br />
                  (USA) :
                </div>
              </div>
              <div className="text-center font-semibold">+1 234 567 890</div>

              <div className="text-center pt-8 flex flex-inline justify-center">
                <img className="w-8 h-8" src={Phone} />
                <div className="font-bold ">
                  Phone
                  <br /> (UK) :
                </div>
              </div>
              <div className="text-center font-semibold">+44 123 456 7890</div>
              <div className="text-center pt-8 flex flex-inline justify-center">
                <img className="w-8 h-8" src={Pin} />
                <div className="font-bold ">
                  Office <br />
                  Address :
                </div>
              </div>
              <div className="text-center font-semibold ">
                123 Main Street, Leicester, LE1 1AB, United Kingdom
              </div>
            </div>
          </div>
        </div> */}
        <form className="bg-white rounded-xl text-center " id="contactus">
          <div className="mt-4 ">
            <span className="text-xl  ">Let's get in touch</span>
          </div>
          <div className="mt-12">
            <input
              className="w-8/12 sm:w-6/12 border-2 rounded-xl p-2"
              placeholder="First Name"
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-8/12 sm:w-6/12 border-2 rounded-xl p-2"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="mt-4">
            <input
              type="email"
              className="w-8/12 sm:w-6/12 border-2 rounded-xl p-2"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-8/12 sm:w-6/12 border-2 rounded-xl p-2"
              placeholder="Subject "
            ></input>
          </div>
          <div className="mt-4">
            <textarea
              className="w-8/12 sm:w-6/12 border-2 rounded-xl p-2 resize-none h-36"
              placeholder="Message"
            />
          </div>
          <Button className="p-6 bg-sky-300 hover:bg-white hover:text-sky-300 hover:border-sky-300 mb-4 border-2 border-sky-300">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
