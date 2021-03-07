import { Component } from "react";
import logo from "./assets/favicon.ico";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";
import { Card, Image, Text, Box } from "theme-ui";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

var ReactRotatingText = require("react-rotating-text");

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
            <h1>
              Hej, my name is
              <ReactRotatingText
                items={[
                  " julizet",
                  " juliazet",
                  " J.Z.",
                  " juliazet0",
                  " Julia Zet",
                  " Julia",
                ]}
              />
            </h1>
            <Box p={3} color="white" bg="primary">
              Here comes a very long text:
              {/* <marquee behavior="scroll" direction="left" scrollamount="10">
                <p>There was a minimum of cinnamon in the aluminum pan.</p>
              </marquee> */}
            </Box>
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
            <h2>Hej, Jude!</h2>
            <Box p={3} color="white" bg="lightgrey">
              Wanna play cards?
            </Box>
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
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
