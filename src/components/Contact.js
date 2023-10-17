import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAddressCard, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Contact") {
      const element = document.getElementById("Contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="min-h-screen flex-col text-left p-10" id="Contact" >
      <div className="text-gray-700 mt-8 mb-5">CONTACT</div>
      <h2 className="text-xl font-bold leading-tight" data-aos={"slide-right"} data-aos-once="true">GET IN TOUCH</h2>
      <div className="text-left mt-5 md:mt-24 grid gap-8 grid-cols-1 lg:grid-cols-2 py-16 pr-0 md:pr-20   text-gray-900">
        <div className="flex flex-col justify-start" data-aos={"slide-right"} data-aos-once="true">
          <div className="flex items-center mb-7 flex-column sm:flex-row">
            <div className=" m-h-64 p-3 text-2xl text-gray-500">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <span className="text-gray-800 pl-5 font-semibold">rohithvijaypersonal@gmail.com</span>
          </div>
          <div className="flex items-center mb-7">
            <div className=" m-h-64 p-3 text-2xl  text-gray-500">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <span className="text-gray-800 pl-5 font-semibold">512 Glendene Cres,<br /> Waterloo, Ontario</span>
          </div>
          <div className="flex items-center">
            <div className=" m-h-64 p-3 text-2xl  text-gray-500">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <span className="text-gray-800 pl-5 font-semibold">+1 548 577 8889</span>
          </div>
        </div>
        <div className="" data-aos={"slide-up"} data-aos-once="true">
          <div>
            <input
              className="w-full border-b-2 border-gray-200 text-gray-800 focus:border-gray-800  mt-2 p-3 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mt-8">
            <input
              className="w-full border-b-2 border-gray-200 text-gray-800  focus:border-gray-800 mt-2 p-3  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mt-8">
            <textarea
              className="w-full h-32 border-b-2 border-gray-200 text-gray-800 focus:border-gray-800 mt-2 p-3  focus:outline-none focus:shadow-outline"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="mt-8 text-left">
            <button className="inline-flex px-3 py-2 mx-auto w-fit text-sm font-medium border  focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700">
              <span className="pl-2">Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
