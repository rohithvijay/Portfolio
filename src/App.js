import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Content from "./components/content";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const options = { duration: 2000 };
  Aos.init(options);
  return (
    <div className="app">
      <Router>
        <Content />
      </Router>
    </div>
  );
}

export default App;
