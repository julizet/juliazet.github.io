/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
