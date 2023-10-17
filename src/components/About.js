import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/About") {
      const element = document.getElementById("About");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen overflow-x-hidden p-10" id="About">
      <section class="about" data-section="about">
        <div className="flex-col mt-14 flex flex-auto">
          <div className="text-gray-700 mt-8 mb-5">ABOUT</div>
          <h2 className="text-xl font-bold leading-tight" data-aos={"slide-right"} data-aos-once="true"> WHO AM I ?</h2>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"zoom-in"} data-aos-once="true"
          >
            Creative Front End Software Developer with 6 years of experience
            having a strong background in developing robust, secure, and
            user-friendly web and mobile applications in various verticals such as
            e-Commerce, Health care and Banking and Financial services using
            JavaScript frameworks like React and Angular. <br />I love exploring
            new technologies and building something that didn’t exist before.
          </p>
        </div>
        <div class="py-20 lg:px-10 xl:px-56 grid grid-cols-1 md:grid-cols-3 gap-10" data-aos={"fade-up"} data-aos-once="true">
          <div className=" m-h-64 p-6 text-2xl text-gray-800  border-b-2 border-gray-900 text-center bg-theme">
            <FontAwesomeIcon icon={faCode}/>
            <h3 className="text-sm mt-5">Web Design</h3>
          </div>
          <div className=" m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme">
            <FontAwesomeIcon icon={faDesktop} />
            <h3 className="text-sm mt-5">Software</h3>
          </div> 
          <div className=" m-h-64 p-6 text-2xl text-gray-800 shadow-lg border-b-2 border-gray-900 text-center bg-theme">
            <FontAwesomeIcon icon={faMobile} />
            <h3 className="text-sm mt-5">Application</h3>
          </div>
        </div>
        <div className="flex-col mt-14 flex flex-auto text-grey-800 p-14 bg-theme">
          <h4 className="md:text-2xl font-medium " data-aos={"fade-left"} data-aos-once="true">
            I am happy to know you that <br />
            <b>50+</b> projects done sucessfully!
          </h4>
        </div>
      </section>
    </div>
  );
};

export default About;
