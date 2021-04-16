import { Component } from "react";
import logo from "./assets/favicon.ico";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";
import { Card, Image, Text } from "theme-ui";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Rotation from "./components/Rotation";

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
            <Rotation></Rotation>
            <span
              style={{
                display: "inline-block",
                background: "#d0fedc",
                width: 4 + "em",
                height: 1 + "em",
                borderRadius: 0.1 + "em",
              }}
            ></span>
            <h3
              style={{
                display: "inline-block",
                marginLeft: 0.5 + "em",
              }}
            >
              Civic Engagement
            </h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sagittis purus sit amet magna fermentum pharetra. Vivamus volutpat
              ante in felis dapibus semper. Aenean suscipit metus tristique odio
              sagittis, at pulvinar augue ultricies. Donec aliquet enim id
              molestie cursus. Sed justo quam, rutrum eu egestas eget, hendrerit
              convallis enim. Pellentesque vel nisi sit amet lorem aliquet
              ultrices eget non quam. Suspendisse rutrum leo non sem ultrices,
              vitae volutpat ante molestie. Nunc viverra tellus ex, id gravida
              massa efficitur elementum. Proin non sem vel sem ultricies
              eleifend sed a massa. Vivamus sed consectetur velit. Aliquam eu
              sollicitudin metus, sit amet mollis tellus. Aliquam mattis gravida
              felis eget tincidunt. Ut faucibus tortor eget fringilla rutrum.
              Fusce dictum nisl eget dolor mollis tristique. Suspendisse
              potenti. Nullam ex arcu, interdum id bibendum id, fringilla sit
              amet turpis.{" "}
            </p>{" "}
            <span
              style={{
                display: "inline-block",
                background: "#d0fedc",
                width: 4 + "em",
                height: 1 + "em",
                borderRadius: 0.1 + "em",
              }}
            ></span>
            <h3
              style={{
                display: "inline-block",
                marginLeft: 0.5 + "em",
              }}
            >
              Open Source
            </h3>
            <div className="cardWrapper">
              <Card
                sx={{
                  margin: 4,
                  maxWidth: 220,
                }}
              >
                <Image src={logo} />
                <Text sx={{ textAlign: "center" }}> Beep</Text>
              </Card>
              <Card
                sx={{
                  margin: 4,
                  maxWidth: 220,
                }}
              >
                <Image src={logo} />
                <Text sx={{ textAlign: "center" }}> Meep</Text>
              </Card>
              <Card
                sx={{
                  margin: 4,
                  maxWidth: 220,
                }}
              >
                <Image src={logo} />
                <Text sx={{ textAlign: "center" }}> Clunk</Text>
              </Card>
            </div>
            <span
              style={{
                display: "inline-block",
                background: "#d0fedc",
                width: 4 + "em",
                height: 1 + "em",
                borderRadius: 0.1 + "em",
              }}
            ></span>
            <h3
              style={{
                display: "inline-block",
                marginLeft: 0.5 + "em",
              }}
            >
              Web Prototyping
            </h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sagittis purus sit amet magna fermentum pharetra. Vivamus volutpat
              ante in felis dapibus semper. Aenean suscipit metus tristique odio
              sagittis, at pulvinar augue ultricies.{" "}
            </p>{" "}
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
