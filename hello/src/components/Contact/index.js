import React, { Component } from "react";

import logo from "../../assets/favicon.ico";
import twitter from "../../assets/twitter-128.png";
import linkedin from "../../assets/linkedin-128.png";
import { Link } from "react-router-dom";
import Header from "../Header/index.js";

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
          <h1>Say Hej!</h1>
          <p>You can find me in the wide wide web</p>
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
          <br />
          <br />
          <p>
            Or simply send me an email<br></br>
            <a
              href="mailto:juliazet@gmx.de?subject=Hej, Julia! Email from your Website"
              style={{
                fontWeight: "500",
                textDecoration: "none",
                color: "#ff2150",
              }}
            >
              juliazet@gmx.de
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
