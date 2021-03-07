import React, { Component } from "react";
import logo from "../assets/favicon.ico";
import twitter from "../assets/twitter-128.png";
import linkedin from "../assets/linkedin-128.png";
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
          <h2>Say Hej!</h2>
          <p>You can find me in the wide wide wide web.</p>
          <br />
          <a href="https://twitter.com/juliazet0">
            <img src={twitter} target="_blank" alt="twitter icon" width="5%" />
          </a>
          <a
            href="https://www.linkedin.com/in/julia-zimmermann-325026207/"
            style={{ paddingLeft: 2 + "em" }}
          >
            <img
              src={linkedin}
              target="_blank"
              alt="linkedin icon"
              width="5%"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
