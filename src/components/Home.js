import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BannerSlider from "./Banner";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Home") {
      const element = document.getElementById("Home");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="h-screen p-10 bg-img" id="Home">
      <BannerSlider />
    </div>
  );
};

export default Home;
