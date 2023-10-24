import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/myData";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/About") {
      const element = document.getElementById("About");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const aboutMe = data.about.description.split('\n');

  return (
    <div id="About" className="overflow-x-hidden p-10">
      <h4 className="text-gray-700 mb-5">{data.aboutTitle}</h4>
      <h2
        className="text-xl font-bold leading-tight"
        data-aos={"slide-right"}
        data-aos-once="true"
      >
        {data.aboutSubTitle}
      </h2>
      {aboutMe.map((about, index) => (
        <p
        className="pt-3 leading-7 text-slate-900 text-justify" key = {index}
        data-aos={"zoom-in"}
        data-aos-once="true"
      >
        {about}
      </p>
      ))}
      <div
        className="py-5 sm:py-20 lg:px-10 xl:px-56 grid grid-cols-1 md:grid-cols-3 gap-10"
        data-aos={"fade-up"}
        data-aos-once="true"
      >
        {data.about.platforms.map((platform, index) => (
          <div
            key={index}
            className="m-h-64 p-6 text-2xl text-gray-800  border-b-2 border-gray-900 text-center theme-color2"
          >
            <FontAwesomeIcon icon={platform.icon} />
            <h3 className="text-sm mt-5">{platform.title}</h3>
          </div>
        ))}
      </div>
      <div className="flex-col mt-5 sm:mt-14 flex flex-auto text-grey-800 sm:p-14 p-5 theme-color2">
        <h4
          className="md:text-2xl font-medium "
          data-aos={"fade-left"}
          data-aos-once="true"
        >
          I am proud to say the completion of <br />
          <b>{data.about.projectCount}</b> projects.
        </h4>
      </div>
    </div>
  );
};

export default About;
