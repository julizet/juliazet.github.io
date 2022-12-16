import { Component } from "react";
import logo from "./assets/favicon.ico";
import { Link } from "react-router-dom";

import Footer from "./components/Footer/index.js";
import Rotation from "./components/Rotation/index.js";
import SectionCivic from "./components/SectionCivic/index.js";
import SectionOpenSource from "./components/SectionOpenSource/index.js";
import SectionPrototyping from "./components/SectionPrototyping/index.js";

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="sidebar">
          <Link className="nav-link" to="/">
            <img src={logo} alt="This is my favicon." />
          </Link>
        </div>

        <div className="content">
          <Rotation />
          <SectionCivic />
          <SectionOpenSource />
          <SectionPrototyping />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
