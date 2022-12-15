import { Component } from "react";
import logo from "./assets/favicon.ico";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";
import { Link } from "react-router-dom";

import Navigation from "./components/Navigation/index.js";
import Toggle from "./components/Toggle/index.js";
import Footer from "./components/Footer/index.js";
import Rotation from "./components/Rotation/index.js";
import SectionCivic from "./components/SectionCivic/index.js";
import SectionOpenSource from "./components/SectionOpenSource/index.js";
import SectionPrototyping from "./components/SectionPrototyping/index.js";
import Badges from "./components/Badges";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {}
        <div className="overlay">
          <div className="wrapper">
            <div className="sidebar">
              <Link className="nav-link" to="/">
                <img src={logo} alt="This is my favicon." />
              </Link>
            </div>
            <div className="header-line">
              <Toggle />
              <Navigation />
              <Badges />
            </div>

            <div className="content">
              <Rotation />
              <SectionCivic />
              <SectionOpenSource />
              <SectionPrototyping />
              <Footer />
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
