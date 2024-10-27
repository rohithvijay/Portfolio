import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/profile-dp.jpg";
import SocialLinks from "./SocialLinks";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import { useNavigate } from "react-router-dom";

const SidebarComponent = () => {
  const [selectedLink, setSelectedLink] = useState(
    sessionStorage.getItem("selectedLink") || "Home"
  );
  const [className, setClassName] = useState("");
  let navigate = useNavigate();
  let data = useSelector((store) => store.config.languageData);
  let language = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const sidenav ="sidenav";

  useEffect(() => {
    sessionStorage.setItem("selectedLink", selectedLink);
    const handleScroll = () => {
      setClassName("sidebar");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedLink, className]);

  const handleLanguageChange = (e) => {
    if (e === "EN") {
      e = "FR";
      navigate("/Home");
      setSelectedLink("Accueil");
    } else {
      e = "EN";
      navigate("/Accueil");
      setSelectedLink("Home");
    }
    dispatch(changeLanguage(e));
  };

  return (
    <div className={`${className} ${sidenav}`}>
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
              className="relative  w-20 h-20 sm:w-36 sm:h-36 rounded-full border-double border-gray-100 shadow-sm overflow-hidden img-sub"
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
          <button
            className="text-md font-bold pt-1 mb-5 pos-color img-sub"
            data-aos="fade-down"
            onClick={() => {
              handleLanguageChange(language);
            }}
          >
            {language}
          </button>
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
              >
                {content.title}
              </Link>
            ))}
          </nav>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
