import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../assets/FrontEndDeveloper.pdf";
import data from "../data/myData";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Home") {
      const element = document.getElementById("Home");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div
      id="Home"
      className="h-screen  bg-img"
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-delay="200"
    >
      <div className="text-black-800 flex items-start sm:items-center p-10 pt-14 sm:mt-0 h-screen md:px-14">
        <div className="intro">
          <h4
            className="text-3xl text-gray-800"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
          >
            {data.en.greetings},
          </h4>
          <h3
            className="text-3xl text-gray-800 mb-5 font-bold md:text-5xl"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="800"
          >
            {data.en.self} {data.en.name}
          </h3>
          <button
            className="inline-flex items-center px-3 py-2 mx-auto w-fit text-sm font-medium border  focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700 focus:ring-gray-700" 
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="1000"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resumePDF;
              link.download = "Rohith-Resume.pdf";
              link.click();
            }}>
            <FontAwesomeIcon icon={faDownload} />
            <span className="pl-2">Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
