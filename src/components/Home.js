import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../assets/FrontEndDeveloper.pdf";

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
      className="h-screen p-10 bg-img"
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-delay="200"
    >
      <div className="text-black-800 flex items-start sm:items-center pt-14 sm:mt-0 h-screen md:px-14">
        <div className="intro">
          {/* <h1
            className="text-5xl font-semibold text-gray-800 mb-10"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <img className="w-20" src={idea} alt="idea-on" />
          </h1> */}
          <h4
            className="text-3xl text-gray-800"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="500"
          >
            Hey There,
          </h4>
          <h3
            className="text-3xl text-gray-800 mb-5 font-bold md:text-5xl"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="800"
          >
            It's ROHITH VIJAY
          </h3>
          {/* <h3
            className="text-3xl text-gray-800"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="1000"
          >
            A <span>Front End Developer</span>,<br/> Providing Innovative Front-End Solutions <br/>for the Digital Age.
          </h3> */}
          <button
            className="inline-flex items-center px-3 py-2 md:mt-12 mt-0 mx-auto w-fit text-sm font-medium border  focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700 focus:ring-gray-700" 
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
