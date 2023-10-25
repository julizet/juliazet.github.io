import React, { Component } from "react";
import github from "../../assets/github-mark.svg";
import Tag from "../Tag";

class SectionOpenSource extends Component {
  render() {
    return (
      <div>
        <Tag></Tag>
        <h3
          style={{
            display: "inline-block",
            marginLeft: 0.5 + "em",
          }}
        >
          Open Source Code
        </h3>
        <br />
        <br />
        <div className="cardWrapper">
          <p>More coming soon...</p>
          <a href="https://github.com/julizet" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Link to my GithHub" style={{
            maxHeight: "10vh",
          }}/>
          </a>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default SectionOpenSource;
