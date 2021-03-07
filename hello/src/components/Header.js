import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";

class Header extends Component {
  render() {
    return (
      <nav className="navbar topbar topbar-sticky">
        <div className="topbar-right">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />{" "}
        </div>
      </nav>
    );
  }
}

export default Header;
