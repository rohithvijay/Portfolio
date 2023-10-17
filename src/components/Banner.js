import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../assets/FrontEndDeveloper.pdf";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true
  };

  return (
    <Slider {...settings}>
      <div className="text-black-800 flex items-center h-screen px-10 md:px-14">
        <div
          className="intro"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-5">HELLO !</h2>
          <h1 className="text-4xl font-semibold text-gray-800">I'M ROHITH</h1>
          <button
            class="inline-flex items-center px-3 py-2 mt-12 mx-auto w-fit text-sm font-medium border  focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700 focus:ring-gray-700"
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
      <div className="text-black-800 flex items-center h-screen px-10 md:px-14">
        <div
          className="intro color-1"
          data-aos={"slide-right"}
          data-aos-once="true"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            I'M A CREATIVE FRONT END DEVELOPER
          </h2>
          <h3 className="text-xl text-gray-800">
            I had created this portfolio using <b className="font-bold">REACT JS</b> &
            <b className="font-bold"> TAILWIND CSS.</b>
          </h3>
          <Link
            class="inline-flex items-center px-3 py-2 mt-12 mx-auto w-fit text-sm font-medium border  focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700 focus:ring-gray-700"
            to="/Contact"
          >
            <span className="pl-2">Contact</span>
          </Link>
        </div>
      </div>
    </Slider>
  );
};

export default BannerSlider;
