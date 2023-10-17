import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import profile from "../assets/profile-dp.jpg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const SidebarComponent = () => {
  const [selectedLink, setSelectedLink] = useState(
    localStorage.getItem("selectedLink") || null
  );
  const [className, setClassName] = useState("");

  useEffect(() => {
    localStorage.setItem("selectedLink", selectedLink);
    const handleScroll = () => {
      setClassName("sidebar");
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedLink]);

  return (
    <div className={className}>
      <button
        className="close-menu text-gray-800"
        onClick={() => {
          setClassName("sidebar");
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <button
        className="open-menu text-gray-800"
        onClick={() => {
          setClassName("toggle");
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div>
        <div className="bg-gray-800 text-white w-custom-width space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-30 text-center p-10">
          <div className="flex space-x-2 justify-center">
            <div className="relative w-44 h-44 rounded-full border-double border-gray-100 shadow-sm overflow-hidden">
              <img className="h-full" src={profile} alt="userimage" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold" data-aos="slide-down">
            ROHITH VIJAY
          </h2>
          <h4 className="text-md font-bold pt-1" data-aos="slide-down">
            FRONT END DEVELOPER
          </h4>
          <nav>
            <Link
              smooth
              to="/Home"
              className="block py-2.5 px-4 rounded transition duration-200  hover:bg-gray-700"
              onClick={() => {
                setSelectedLink("home");
                setClassName("sidebar");
              }}
              style={{ color: selectedLink === "home" ? "white" : "grey" }}
              data-aos="slide-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              Home
            </Link>
            <Link
              smooth
              to="/About"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              onClick={() => {
                setSelectedLink("about");
                setClassName("sidebar");
              }}
              style={{ color: selectedLink === "about" ? "white" : "grey" }}
              data-aos="slide-up"
              data-aos-delay="400"
              data-aos-once="true"
            >
              About
            </Link>
            <Link
              smooth
              to="/Experience&Skills"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              onClick={() => {
                setSelectedLink("skills");
                setClassName("sidebar");
              }}
              style={{ color: selectedLink === "skills" ? "white" : "grey" }}
              data-aos="slide-up"
              data-aos-delay="600"
              data-aos-once="true"
            >
              Experience & Skills
            </Link>
            <Link
              smooth
              to="/Projects"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              onClick={() => {
                setSelectedLink("projects");
                setClassName("sidebar");
              }}
              style={{ color: selectedLink === "projects" ? "white" : "grey" }}
              data-aos="slide-up"
              data-aos-delay="800"
              data-aos-once="true"
            >
              Technologies
            </Link>
            <Link
              smooth
              to="/Contact"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              onClick={() => {
                setSelectedLink("contact");
                setClassName("sidebar");
              }}
              style={{ color: selectedLink === "contact" ? "white" : "grey" }}
              data-aos="slide-up"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              Contact
            </Link>
          </nav>
          <div className="flex justify-center">
            <Link
              to="https://linkedin.com/in/rohith-vijay"
              target="_blank"
              className="block py-2.5 px-4 transition duration-200 text-gray-700 brand-hover"
              onClick={() => setSelectedLink("LinkedIn")}
              style={{ color: selectedLink === "LinkedIn" ? "white" : "grey" }}
              data-aos="slide-up"
              data-aos-delay="1200"
              data-aos-once="true"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              to="https://github.com/rohithvijay"
              target="_blank"
              className="block py-2.5 px-4 transition duration-200 text-gray-700 brand-hover"
              onClick={() => setSelectedLink("gitHub")}
              style={{ color: selectedLink === "gitHub" ? "white" : "grey" }}
              data-aos="slide-up"
              data-aos-delay="1200"
              data-aos-once="true"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
