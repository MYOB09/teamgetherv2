import ContactImg from "./assets/contactus.png";
import { Button } from "./components/ui/button";
import Phone from "./assets/call.svg";
import Mail from "./assets/mail.svg";

function Contactus() {
  return (
    <div className=" ">
      <div className=" mt-24" id="bookademo ">
        <form className="bg-gray-200 w-12/12 rounded-xl text-center pt-12 pb-12">
          <div className=" ">
            <span className="text-4xl font-semibold">Book a Demo</span>
          </div>
          <div className="mt-4  ">
            <span className="text-xl  ">
              Schedule a demo with us and see how Teamgether can help your team
              collaborate more effectively.
            </span>
          </div>
          <div className="mt-12">
            <input
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Your Name"
            ></input>
          </div>
          <div className="mt-4">
            <input
              type="email"
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Your Email"
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Your Company "
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Your Position "
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Your Phone Number "
            ></input>
          </div>
          <div className="mt-4">
            <textarea
              className="w-6/12 border-2 rounded-xl p-2 resize-none h-36"
              placeholder="Message"
            />
          </div>
          <Button className="px-12 mt-4 bg-sky-300 hover:bg-white hover:text-sky-300 ">
            Book a Demo
          </Button>
        </form>
      </div>
      <div className="text-center pt-4">
        <span className="text-4xl font-semibold">Contact us</span>
      </div>
      <div className="flex flex-cols-2 ">
        <div className="pt-12 w-4/12 mx-4">
          <div className="text-xs sm:text-lg  font-semibold  text-black s">
            <div className="">
              <div className="text-center pt-8 flex flex-inline justify-center">
                <img className="w-8 h-8" src={Mail} />
                <div className="font-bold ">Online Services Email:</div>
                support@teamgether.com
              </div>
              <div className="text-center pt-8 flex flex-inline justify-center">
                <img className="w-8 h-8" src={Phone} />
                <div className="font-bold ">Phone (USA) :</div> +1 234 567 890
              </div>
              <div className="text-center pt-8 flex flex-inline justify-center">
                <img className="w-8 h-8" src={Phone} />
                <div className="font-bold ">Phone (UK) :</div>+44 123 456 7890
              </div>
              <div className="font-bold text-center pt-8">Office Address :</div>
              <div className="text-center pb-44">
                123 Main Street, Leicester, LE1 1AB, United Kingdom
              </div>
            </div>
          </div>
        </div>
        <form
          className="bg-white pt-12 w-8/12 rounded-xl text-center "
          id="contactus"
        >
          <div className="mt-4 ">
            <span className="text-xl  ">Let's get in touch</span>
          </div>
          <div className="mt-12">
            <input
              className="w-5/12 border-2 rounded-xl p-2"
              placeholder="First Name"
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-5/12 border-2 rounded-xl p-2"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="mt-4">
            <input
              type="email"
              className="w-5/12 border-2 rounded-xl p-2"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-5/12 border-2 rounded-xl p-2"
              placeholder="Subject "
            ></input>
          </div>
          <div className="mt-4">
            <textarea
              className="w-5/12 border-2 rounded-xl p-2 resize-none h-36"
              placeholder="Message"
            />
          </div>
          <Button className="p-6 bg-sky-300 hover:bg-white hover:text-sky-300 mb-4">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
