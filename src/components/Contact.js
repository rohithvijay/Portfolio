import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faSkype } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faAddressCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const copyRightYear = new Date().getFullYear();

  useEffect(() => {
    if (location.pathname === "/Contact") {
      const element = document.getElementById("Contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div
      id="Contact"
      className="flex-col text-left p-10 theme-color2"
    >
      <h4 className="text-gray-700 mb-5">CONTACT</h4>
      <h2
        className="text-xl font-bold leading-tight"
        data-aos={"slide-right"}
        data-aos-once="true"
      >
        GET IN TOUCH
      </h2>
      <div className="text-left grid gap-8 grid-cols-1 lg:grid-cols-2 py-5 sm:py-16 pr-0 md:pr-20   text-gray-900">
        <div
          className="flex flex-col justify-center"
          data-aos={"slide-right"}
          data-aos-once="true"
        >
          <div className="flex items-center mb-7 text-gray-500 hover:text-gray-700">
            <div className=" m-h-64 p-3 text-2xl ">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <Link
              to="mailto:rohithvijaypersonal@gmail.com"
              className="text-gray-600 pl-2 font-normal hover:font-semibold cursor-pointer"
            >
              rohithvijaypersonal@gmail.com
            </Link>
          </div>
          <div className="flex items-center mb-7 text-gray-500 hover:text-gray-700">
            <div className=" m-h-64 p-3 text-2xl">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <span className="text-gray-600 pl-2 font-normal hover:font-semibold cursor-pointer">
              512 Glendene Cres,
              <br /> Waterloo, Ontario
            </span>
          </div>
          <div className="flex items-center mb-7 text-gray-500 hover:text-gray-700">
            <div className=" m-h-64 p-3 text-2xl">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <Link
              to="tel:+15485778889"
              className="text-gray-600 pl-2 font-normal hover:font-semibold cursor-pointer"
            >
              +1 548 577 8889
            </Link>
          </div>
        </div>
        <div
          className="flex flex-col justify-center"
          data-aos={"fade-up"}
          data-aos-once="true"
        >
          <div className="flex justify-center">
            <Link
              to="https://linkedin.com/in/rohith-vijay"
              target="_blank"
              className="block py-2.5 px-4 transition duration-200 text-gray-400 hover:text-gray-800 text-3xl"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              to="https://github.com/rohithvijay"
              target="_blank"
              className="block py-2.5 px-4 transition duration-200 text-gray-400 hover:text-gray-800 text-3xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              to="skype:live: cid.6fe79738405830cb?chat"
              target="_blank"
              className="block py-2.5 px-4 transition duration-200 text-gray-400 hover:text-gray-800 text-3xl"          
            >
              <FontAwesomeIcon icon={faSkype} />
            </Link>
          </div>
          <div className="text-gray-600 text-sm sm:text-md pl-2 font-normal text-center cursor-pointer">
            CopyRight &copy; {copyRightYear} . All Rights Reserved
          </div>

          {/* <div>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
