import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Content from "./components/content";
import Aos from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const options = { duration: 2000 };
  Aos.init(options);
  return (
    <Provider store={appStore}>
      <div className="app">
        <Router>
          <Content />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
