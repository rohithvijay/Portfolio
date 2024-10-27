import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const location = useLocation();
  let data = useSelector((store) => store.config.languageData);
  const Portfolio = data.contents[3].title;

  useEffect(() => {
    if (location.pathname === `/${Portfolio}` || location.pathname === "/Portfolio") {
      const element = document.getElementById(Portfolio);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, Portfolio]);

  return (
    <div id={Portfolio} className="overflow-x-hidden p-10">
      <h4 className="text-gray-700 mb-5">{data.portfolioTitle}</h4>
      <h2
        className="text-xl font-bold leading-tight"
        data-aos={"slide-right"}
        data-aos-once="true"
      >
        {data.portfolioSubtTitle}
      </h2>
      <div
        className="py-5 sm:py-20 lg:px-10 auto-rows-fr grid grid-cols-1 xl:grid-cols-3 gap-10"
        data-aos={"fade-up"}
        data-aos-once="true"
      >
        {data.portfolio.map((projects, index) => (
          <Link
            key={index}
            to={projects.url}
            className="md:flex px-2 py-2 hover:scale-110 transition-all"
          >
            <div
              className="md:flex-1 shadow-lg bg-white hover:border-b-2 hover:border-gray-900"
            >
              <img src={projects.img} alt={projects.title} />
              <div className="p-6">
                <h3 className="text-lg mt-5 font-semibold">{projects.title}</h3>
                <h5 className="text-sm mt-5 m-h-80">{projects.description}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
