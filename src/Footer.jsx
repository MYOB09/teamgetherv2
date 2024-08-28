import Twitter from "./assets/twitter.svg";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";

function Footer() {
  return (
    <div>
      {/* <div className="bg-sky-300/90 ">
        <div className="text-xs sm:text-lg  font-semibold  text-white   ">
          <div className="">
            <div className="text-center sm:text-start">
              <div className="font-bold ">Online Services Email</div>
              support@teamgether.com
            </div>
            <div className="text-center sm:text-start">
              <div className="font-bold ">Phone (USA) :</div> +1 234 567 890
            </div>
            <div className="text-center sm:text-start">
              <div className="font-bold ">Phone (UK) :</div> +44 123 456 7890
            </div>
            <div className="font-bold text-center sm:text-start">
              Office Address :
            </div>
            <div className="text-center sm:text-start">
              123 Main Street, Leicester, LE1 1AB, United Kingdom
            </div>
          </div>
        </div>
      </div> */}
      <footer className="text-center text-xl border-t p-6">
        Copyright © 2024{" "}
        <span className="font-bold ">
          Team<span className="text-sky-500">g</span>ether
        </span>{" "}
        <div className="flex justify-center pt-2">
          <div className="w-8 h-8 mx-2">
            <img src={Twitter} />
          </div>
          <div className="w-8 h-8 mx-2">
            <img src={Facebook} />
          </div>
          <div className="w-8 h-8 mx-2">
            <img src={LinkedIn} />
          </div>
        </div>
        <div className="text-sm mt-2">
          <span className="font-semibold">Online Services Email:</span>{" "}
          support@teamgether.com{" "}
          <span className="font-semibold">Phone (USA) :</span> +1 234 567 890{" "}
          <span className="font-semibold">Phone (UK) :</span> +44 123 456 7890{" "}
          <span className="font-semibold">Office Address :</span> 123 Main
          Street, Leicester, LE1 1AB, United Kingdom
        </div>
      </footer>
    </div>
  );
}

export default Footer;
