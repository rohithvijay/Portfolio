import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faDownload } from "@fortawesome/free-solid-svg-icons";
import cycloidesExp from "../assets/Cycloides.pdf";
import QuestExp from "../assets/QuestGlobal.pdf";
import reflectionsExp from "../assets/Reflections.pdf";
import data from "../data/myData";

const Skills = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Experience&Skills") {
      const element = document.getElementById("Experience&Skills");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div
      id="Experience&Skills"
      className="flex-col text-left p-10 overflow-hidden theme-color2"
    >
      <h4 className="text-gray-700 mb-5">{data.en.experienceTitle}</h4>
      <h2
        className="text-xl font-bold leading-tight mb-10"
        data-aos={"slide-right"}
        data-aos-once="true"
      >
        {data.en.experienceSubTitle}
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-7 mt-7">
        <ol className="relative border-l  border-gray-700 mb-6">
          {data.en.experience.map((exp, index) => (
            <li
              className="mb-10 ml-10"
              key={index}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <span className="absolute flex items-center justify-center w-6 h-6   rounded-full custom-left ring-8  ring-gray-900 bg-white text-black text-sm">
                <FontAwesomeIcon icon={faPencil} />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold  text-black">
                {exp.title}
              </h3>
              <time className="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
                {exp.startdate} - {exp.enddate}
              </time>
              <div className="font-normal text-gray-500 text-sm">
                {exp.project.map((projects, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-600">
                      {projects.projecttitle}
                    </h3>
                    <p>{projects.projectDescription}</p>
                  </div>
                ))}
              </div>
              <button
                className="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
                onClick={(event) => {
                  console.log(event);
                  const link = document.createElement("a");
                  switch (index) {
                    case 0:
                      link.href = QuestExp;
                      link.download = exp.title + ".pdf";
                      break;
                    case 1:
                      link.href = reflectionsExp;
                      link.download = exp.title + ".pdf";
                      break;
                    case 2:
                      link.href = cycloidesExp;
                      link.download = exp.title + ".pdf";
                      break;
                    default:
                      break;
                  }
                  link.click();
                }}
              >
                <FontAwesomeIcon icon={faDownload} />
                <span className="pl-2">Download Certificate</span>
              </button>
            </li>
          ))}
        </ol>

        <div
          className="flex flex-col text-center"
          data-aos="slide-up"
          data-aos-once="true"
        >
          <div className="ml-5 md:ml-16 flex flex-col gap-8 mt-6">
            {data.en.skills.map((skill, index) => (
              <Progress
                key={index}
                name={skill.title}
                percent={skill.percent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
