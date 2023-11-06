import Home from "./Home";
import About from "./About";
import Technologies from "./Technologies";
import Contact from "./Contact";
import Skills from "./Skills";
import SidebarComponent from "./Sidebar";
import Portfolio from "./Portfolio";

const Content = () => {
  return (
    <div className="min-h-screen">
      <SidebarComponent />
      <div className="bg-gray-100 custom-body absolute h-full">
        <Home />
        <div className="inner-content">
          <About />
          <Skills />
          <Portfolio />
          <Technologies />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Content;
