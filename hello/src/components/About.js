import React, { Component } from "react";
import logo from "../assets/favicon.ico";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <Link className="nav-link" to="/">
            <img src={logo} alt="This is my favicon." />
          </Link>
        </div>
        <div className="content">
          <h2>Hej Hej @About</h2>
          <p>This side is still under construction.</p>
        </div>
      </div>
    );
  }
}

export default About;
