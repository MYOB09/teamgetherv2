import { Button } from "./components/ui/button";

function DemoForm() {
  return (
    <div className=" " id="bookademo">
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
  );
}

export default DemoForm;
