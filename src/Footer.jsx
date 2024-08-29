import Twitter from "./assets/twitter.svg";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";

function Footer() {
  return (
    <div>
      <footer className="text-center text-xl border-t p-6">
        Copyright © 2024{" "}
        <span className="font-bold ">
          Team<span className="text-sky-500">g</span>ether
        </span>{" "}
        <div className="flex justify-center pt-2">
          <div className="w-8 h-8 mx-2 hover:cursor-pointer">
            <img src={Twitter} />
          </div>
          <div className="w-8 h-8 mx-2 hover:cursor-pointer">
            <img src={Facebook} />
          </div>
          <div className="w-8 h-8 mx-2 hover:cursor-pointer">
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
