import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import profile from "../assets/profile-dp.jpg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import data from "../data/myData";

const SidebarComponent = () => {
  const [selectedLink, setSelectedLink] = useState(
    sessionStorage.getItem("selectedLink") || "Home"
  );
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName("sidebar");
    sessionStorage.setItem("selectedLink", selectedLink);
    const handleScroll = () => {
      setClassName("sidebar");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <div className="bg-gray-800 text-white w-custom-width py-7 px-0 fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-30 text-center">
          <div className="flex space-x-2 justify-center mb-5">
            <div
              className="relative  w-20 h-20 sm:w-44 sm:h-44 rounded-full border-double border-gray-100 shadow-sm overflow-hidden img-sub"
              data-aos="fade-down"
            >
              <img className="h-full userimage" src={profile} alt="userimage" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold img-sub" data-aos="fade-down">
            {data.name}
          </h2>
          <h4
            className="text-md font-bold pt-1 mb-10 pos-color img-sub"
            data-aos="fade-down"
          >
            {data.title}
          </h4>
          <nav>
            {data.contents.map((content, index) => (
              <Link
                smooth
                key={index}
                to={content.title.split(" ").join("")}
                className={
                  selectedLink === content.title ? "block-white" : "block-grey"
                }
                onClick={() => {
                  setSelectedLink(content.title);
                  setClassName("sidebar");
                }}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                {content.title}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center absolute bottom-8 w-full img-sub">
            <Link
              to="https://linkedin.com/in/rohith-vijay"
              target="_blank"
              className="block py-2.5 px-4  text-gray-700 brand-hover"
              onClick={() => setSelectedLink("LinkedIn")}
              style={{ color: selectedLink === "LinkedIn" ? "white" : "grey" }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              to="https://github.com/rohithvijay"
              target="_blank"
              className="block py-2.5 px-4  text-gray-700 brand-hover"
              onClick={() => setSelectedLink("gitHub")}
              style={{ color: selectedLink === "gitHub" ? "white" : "grey" }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              to="skype:live: cid.6fe79738405830cb?chat"
              target="_blank"
              className="block py-2.5 px-4  text-gray-700 brand-hover"
              onClick={() => setSelectedLink("skype")}
              style={{ color: selectedLink === "skype" ? "white" : "grey" }}
            >
              <FontAwesomeIcon icon={faSkype} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
