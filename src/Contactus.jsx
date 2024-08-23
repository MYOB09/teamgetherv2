import ContactImg from "./assets/contactus.png";
import { Button } from "./components/ui/button";
import MainContent from "./MainContent";

function Contactus() {
  return (
    <div className="bg-[url('./assets/contactus.png')] ">
      <div className=" mt-24">
        <form className="bg-gray-200 w-12/12 rounded-xl text-center ">
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
          <Button className="px-12 bg-sky-300 hover:bg-white hover:text-sky-300 mb-6">
            Book a Demo
          </Button>
        </form>

        <form className="bg-white/50 w-12/12 rounded-xl text-center ">
          <div className="pt-12">
            <span className="text-4xl font-semibold  ">Contact us</span>
          </div>
          <div className="mt-4 ">
            <span className="text-xl  ">Let's get in touch</span>
          </div>
          <div className="mt-12">
            <input
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="First Name"
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="mt-4">
            <input
              type="email"
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="mt-4">
            <input
              className="w-6/12 border-2 rounded-xl p-2"
              placeholder="Subject "
            ></input>
          </div>
          <div className="mt-4">
            <textarea
              className="w-6/12 border-2 rounded-xl p-2 resize-none h-36"
              placeholder="Message"
            />
          </div>
          <Button className="px-12 bg-sky-300 hover:bg-white hover:text-sky-300">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
