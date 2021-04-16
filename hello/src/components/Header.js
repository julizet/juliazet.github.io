/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { useColorMode } from "theme-ui";

import About from "./About";
import Contact from "./Contact";
import Badges from "./Badges";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div
        sx={{
          display: "inline-block",
          textAlign: "center",
          lineHeight: "inherit",
          textDecoration: "none",
          fontSize: "inherit",
          fontWeight: "bold",
          px: 3,
          py: 2,
        }}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        {colorMode === "default" ? "Dark" : "Light"}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/about"} className="nav-link">
          About
        </Link>
        <Link to={"/contact"} className="nav-link">
          Contact
        </Link>
      </nav>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
      <Badges></Badges>
    </div>
  );
};

export default Header;
