import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../assets/FrontEndDeveloper.pdf";
import idea from "../assets/idea.png";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Home") {
      const element = document.getElementById("Home");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="h-screen p-10 bg-img" id="Home">
      <div className="text-black-800 flex items-center h-screen px-10 md:px-14">
        <div className="intro">
          <h1
            className="text-5xl font-semibold text-gray-800 mb-10"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <img className="w-20" src={idea} alt="idea-on" />
          </h1>
          <h3
            className="text-3xl text-gray-800"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="1000"
          >
            Innovative Front-End Solutions for the Digital Age.
          </h3>
          <button
            className="inline-flex items-center px-3 py-2 mt-12 mx-auto w-fit text-sm font-medium border  focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700 focus:ring-gray-700"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resumePDF;
              link.download = "Rohith-Resume.pdf";
              link.click();
            }}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span className="pl-2">Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
