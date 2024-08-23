function Footer() {
  return (
    <div>
      <div className="text-center ">
        <div className="text-xl font-semibold  text-sky-500 m-10 inline-flex  space-x-12">
          <a href="#">
            <p className="hover:cursor-pointer hover:text-sky-300">
              <br /> Online Services Email:
              <br /> support@teamgether.com
            </p>
          </a>
          <a href="#">
            <p className="hover:cursor-pointer hover:text-sky-300">
              <br /> Phone (USA): +1 234 567 890
              <br /> Phone (UK): +44 123 456 7890
            </p>
          </a>
          <a href="#">
            <p className="hover:cursor-pointer hover:text-sky-300">
              <br /> Office Address 123 Main Street,
              <br /> Leicester, LE1 1AB, United Kingdom
            </p>
          </a>
        </div>
      </div>
      <footer className="text-center text-xl border-t p-6">
        Copyright © 2024 <br />
        <span className="font-bold ">
          Team<span className="text-sky-500">g</span>ether
        </span>
        <br></br>
      </footer>
    </div>
  );
}

export default Footer;
