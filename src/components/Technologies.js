import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/myData";

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
    counter("projects", 0, 55, 3000);
    counter("clients", 0, 30, 3000);
    counter("years", 0, 6, 3000);
    if (location.pathname === "/Technologies") {
      const element = document.getElementById("Technologies");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="Technologies" className="flex-col p-10 text-left ">
      <h4 className="text-gray-700 mb-5">{data.technologiesTitle}</h4>
      <h2
        className="text-xl font-bold"
        data-aos={"slide-right"}
        data-aos-once="true"
      >
        {data.technologiesSubtTitle}
      </h2>

      <div
        className="py-5 sm:py-20 px-5 xl:px-40 grid grid-cols-2 md:px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center text-center tech"
        data-aos={"fade-up"}
        data-aos-once="true"
      >
        {data.technologies.map((technology, index) => (
          <div
            className="m-h-64 p-6 text-3xl sm:text-5xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center theme-color2 cursor-pointer relative"
            key={index}
          >
            <FontAwesomeIcon icon={technology.icon} />
            <h2 className="text-sm sm:text-xl font-normal text-white leading-tight">
              {technology.title}
            </h2>
          </div>
        ))}
      </div>
      <div className="py-5 sm:py-20 theme-color2">
        <div className="px-5 xl:px-40 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white m-h-64 p-6 text-2xl text-gray-800  border-b-2 border-gray-900 text-center">
            <h3 className="text-3xl sm:text-5xl font-bold mt-5" id="coffee">
              {count1}
            </h3>
            <h3 className="text-sm sm:text-lg mt-5">
              CUPS OF <br />
              COFFEE
            </h3>
          </div>
          <div className="bg-white m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center">
            <h3 className="text-3xl sm:text-5xl font-bold mt-5" id="projects">
              {count2}
            </h3>
            <h3 className="text-sm sm:text-lg mt-5">PROJECTS</h3>
          </div>
          <div className="bg-white m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center">
            <h3 className="text-3xl sm:text-5xl font-bold mt-5" id="clients">
              {count3}
            </h3>
            <h3 className="text-sm sm:text-lg mt-5">CLIENTS</h3>
          </div>
          <div className="bg-white m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center">
            <h3 className="text-3xl sm:text-5xl font-bold  mt-5" id="years">
              {count4}
            </h3>
            <h3 className="text-sm sm:text-lg mt-5">YEARS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
