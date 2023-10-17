import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faAngular,
  faReact,
  faHtml5,
  faCss3,
  faJira,
  faGit,
  faBootstrap,
  faInvision,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const Technologies = () => {
  const location = useLocation();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          if (obj !== null) {
            obj.textContent = current;
          }
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
      setCount1(id);
      setCount2(id);
      setCount3(id);
      setCount4(id);
    }
    counter("coffee", 0, 1610, 50);
    counter("projects", 100, 55, 3000);
    counter("clients", 0, 30, 3000);
    counter("years", 0, 6, 3000);
    if (location.pathname === "/Projects") {
      const element = document.getElementById("Projects");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex-col text-left " id="Projects">
      <div className="p-10">
        <div className="text-gray-700 mt-8 mb-5">PROJECTS</div>
        <h2
          className="text-xl font-bold"
          data-aos={"slide-right"}
          data-aos-once="true"
        >
          Hands-on Technologies
        </h2>

        <div
          className="py-20 px-5 xl:px-40 grid grid-cols-1 md:px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center text-center tech"
          data-aos={"fade-up"}
          data-aos-once="true"
        >
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faHtml5} />
            <h2 className="text-xl font-bold leading-tight">HTML 5</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faCss3} />
            <h2 className="text-xl font-bold leading-tight">CSS 3</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faBootstrap} />
            <h2 className="text-xl font-bold leading-tight">BOOTSTRAP</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faAngular} />
            <h2 className="text-xl font-bold leading-tight">ANGULAR</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faReact} />
            <h2 className="text-xl font-bold leading-tight">REACT</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faVuejs} />
            <h2 className="text-xl font-bold leading-tight">VUE</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faGithub} />
            <h2 className="text-xl font-bold leading-tight">GITHUB</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faJira} />
            <h2 className="text-xl font-bold leading-tight">JIRA</h2>
          </div>
          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faGit} />
            <h2 className="text-xl font-bold leading-tight">GIT</h2>
          </div>

          <div className="m-h-64 p-6 text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme cursor-pointer relative">
            <FontAwesomeIcon icon={faInvision} />
            <h2 className="text-xl font-bold leading-tight">INVISION</h2>
          </div>
        </div>
      </div>
      <div className="py-20 bg-theme">
        <div className="px-5 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-gray-100 m-h-64 p-6 text-2xl text-gray-800  border-b-2 border-gray-900 text-center">
            <h3 className="text-5xl font-bold mt-5" id="coffee">
              {count1}
            </h3>
            <h3 className="text-lg mt-5">
              CUPS OF <br />
              COFFEE
            </h3>
          </div>
          <div className="bg-gray-100 m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center">
            <h3 className="text-5xl font-bold mt-5" id="projects">
              {count2}
            </h3>
            <h3 className="text-lg mt-5">PROJECTS</h3>
          </div>
          <div className="bg-gray-100 m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center">
            <h3 className="text-5xl font-bold mt-5" id="clients">
              {count3}
            </h3>
            <h3 className="text-lg mt-5">CLIENTS</h3>
          </div>
          <div className="bg-gray-100 m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center">
            <h3 className="text-5xl font-bold  mt-5" id="years">
              {count4}
            </h3>
            <h3 className="text-lg mt-5">YEARS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
