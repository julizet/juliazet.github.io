import { Component } from "react";
import logo from "./assets/favicon.ico";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Rotation from "./components/Rotation";
import SectionCivic from "./components/SectionCivic";
import SectionOpenSource from "./components/SectionOpenSource";
import SectionPrototyping from "./components/SectionPrototyping";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <div className="sidebar">
            <Link className="nav-link" to="/">
              <img src={logo} alt="This is my favicon." />
            </Link>
          </div>
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <Rotation />
            <SectionCivic />
            <SectionOpenSource />
            <SectionPrototyping />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
