import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faDownload } from "@fortawesome/free-solid-svg-icons";
import cycloidesExp from "../assets/Cycloides.pdf";
import reflectionsExp from "../assets/Quest-Global.pdf";
import QuestExp from "../assets/Reflections.pdf";

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
      className="min-h-screen flex-col text-left p-10 overflow-hidden"
    >
      <div className="text-gray-700 mt-8 mb-5">Experience</div>
      <h2
        className="text-xl font-bold leading-tight mb-10"
        data-aos={"slide-right"}
        data-aos-once="true"
      >
        Work Experience & Skills
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-7 mt-7">
        <ol className="relative border-l  border-gray-700 mb-6">
          <li className="mb-10 ml-10" data-aos="zoom-in" data-aos-once="true">
            <span className="absolute flex items-center justify-center w-6 h-6   rounded-full custom-left ring-8  ring-gray-900 bg-white text-black text-sm">
              <FontAwesomeIcon icon={faPencil} />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold  text-black">
              Senior Software Engineer
            </h3>
            <time className="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              MAR 2022 - AUG 2023
            </time>
            <div className="font-normal text-gray-500 text-sm">
              <h3 className="font-semibold text-gray-600">
                Canon Medical - Role as a Senior Software Engineer. (2021-2022)
              </h3>
              <p>
                Developing and maintaining web applications using Angular
                framework to support various healthcare-related processes and
                systems. Designing and Implementation of responsive layouts,
                forms, and interactive components using Angular, HTML, CSS and
                Bootstrap. Worked closely with healthcare professionals and
                stakeholders to understand their requirements and translate them
                into functional features. This involves implementing complex
                business logic and workflows within the Angular application.
                Implementation and Integration of REST APIs into the application
                using RXJS library in Angular. Implementation of Angular
                features like life cycle hooks, interaction between components,
                custom directives/pipes across different components in the
                project. Implementation of SSE event in server side with the
                help of C# to identify live events on the website. Followed
                responsive design principles across different devices like PC,
                laptop, mobile phones etc. using media queries.
              </p>
            </div>
            <button
              className="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
              onClick={() => {
                const link = document.createElement("a");
                link.href = QuestExp;
                link.download = "Quest-Global-Experience.pdf";
                link.click();
              }}
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="pl-2">Download Certificate</span>
            </button>
          </li>
          <li
            className="mb-10 ml-10"
            data-aos="zoom-out"
            data-aos-delay="700"
            data-aos-once="true"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full custom-left ring-8 ring-gray-900 bg-white text-black text-sm">
              <FontAwesomeIcon icon={faPencil} />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-black">
              Reflections Info Systems
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              SEP 2019 - MAR 2022
            </time>
            <div className="font-normal text-gray-500 text-sm">
              <ul>
                <li className="my-3">
                  <h3 className="font-semibold text-gray-600">
                    PASS ML - Role as a Senior UI Developer. (2021-2022)
                  </h3>
                  <p>
                    Collaborated with internal teams and vendors to fix and
                    improve products and services. Implementation of responsive
                    layouts and interactive components using React, HTML, CSS
                    and Bootstrap. Implementation and Integration of REST APIs
                    into the application using RXJS and react hooks.
                    Identification and fixing bugs, as well as optimizing
                    performance.
                  </p>
                </li>
                <li className="my-3">
                  <h3 className="font-semibold text-gray-600">
                    SVAST - Role as an UI Developer. (2019-2021)
                  </h3>
                  <p>
                    Designing and developing robust solutions to meet client
                    requirements for functionality, scalability and performance.
                    Worked with back-end programmers to implement REST API using
                    Angular. Wrote understandable HTML, SCSS and typescript code
                    using JavaScript frameworks like Angular to build responsive
                    web-based applications. Followed Agile development
                    methodology to ensure product quality.
                  </p>
                </li>
              </ul>
            </div>

            <button
              className="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
              onClick={() => {
                const link = document.createElement("a");
                link.href = reflectionsExp;
                link.download = "Reflections-experience.pdf";
                link.click();
              }}
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="pl-2">Download Certificate</span>
            </button>
          </li>
          <li
            className="ml-10"
            data-aos="zoom-in"
            data-aos-offset={"-15"}
            data-aos-delay="1300"
            data-aos-once="true"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full custom-left ring-8 ring-gray-900 bg-white text-black text-sm">
              <FontAwesomeIcon icon={faPencil} />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-black">
              Cycloides Technologies
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              JUL 2017 - SEP 2019
            </time>
            <div className="font-normal text-gray-500 text-sm">
              <ul>
                <li className="my-3">
                  <h3 className="font-semibold text-gray-600">
                    TUNE PROTECT - Role as a React Developer. (2019)
                  </h3>
                  <p>
                    Translated design teams UX wireframes and mockups into
                    responsive, interactive features using React (JSX) and
                    building responsive websites for the website. Integration of
                    API’s and unit testing.
                  </p>
                </li>
                <li className="my-3">
                  <h3 className="font-semibold text-gray-600">
                    My Recycle Buddy - Role as an Angular Developer. (2018-2019)
                  </h3>
                  <p>
                    Translated design teams UX wireframes and mockups into
                    responsive, interactive features using HTML, CSS and
                    JavaScript. Integration of REST API’s using Angular.
                  </p>
                </li>
                <li className="my-3">
                  <h3 className="font-semibold text-gray-600">
                    Commissionaires - Role as an Ionic Developer. (2018-2019)
                  </h3>
                  <p>
                    Developed UI design and API integrations for mobile
                    applications using technology like ionic framework which
                    used ionic libraries and JavaScript framework like angular
                    2.
                  </p>
                </li>
                <li className="my-3">
                  <h3 className="font-semibold text-gray-600">
                    Onedles - Role as an Angular JS Developer. (2017-2018)
                  </h3>
                  <p>
                    Web development using HTML, CSS, Angular 1 and PHP for
                    building and developing UI components. Involved in building
                    responsive web designs and fixing browser compatibility
                    issues. Identification, fixing and tracking the bugs in the
                    Redmine tool.
                  </p>
                </li>
              </ul>
            </div>
            <button
              className="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
              onClick={() => {
                const link = document.createElement("a");
                link.href = cycloidesExp;
                link.download = "Cycloides-Experience.pdf";
                link.click();
              }}
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="pl-2">Download Certificate</span>
            </button>
          </li>
        </ol>

        <div
          className="flex flex-col text-center"
          data-aos="slide-up"
          data-aos-once="true"
        >
          <div className="ml-5 md:ml-16 flex flex-col gap-8 mt-6">
            <Progress name={"HTML/CSS"} percent={90} />
            <Progress name={"JavaScript"} percent={80} />
            <Progress name={"Angular"} percent={80} />
            <Progress name={"TypeScript"} percent={80} />
            <Progress name={"React"} percent={70} />
            <Progress name={"SQL"} percent={65} />
            <Progress name={"Ionic"} percent={50} />
            <Progress name={"C#"} percent={50} />
            <Progress name={"AWS"} percent={40} />
            <Progress name={"Vue"} percent={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
