import React, { Component } from "react";
import logo from "../assets/favicon.ico";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <Link className="nav-link" to="/">
            <img src={logo} alt="This is my favicon." />
          </Link>
        </div>
        <div className="content">
          <h2>Hej Hej @Contact</h2>
          <p>You can find me in the wide wide wide web.</p>
          <a href="https://twitter.com/juliazet0">
            <img
              src="../assets/twitter-128.png"
              target="_blank"
              alt="twitter icon"
            />
          </a>
          <br />
          <a href="https://www.linkedin.com/in/julia-zimmermann-325026207/">
            <img
              src="../assets/linkedin-128.png"
              target="_blank"
              alt="linkedin icon"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
