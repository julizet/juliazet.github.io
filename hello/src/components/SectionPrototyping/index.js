import React, { Component } from "react";

class SectionPrototyping extends Component {
  render() {
    return (
      <div>
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
          How I work? Mainly with GitHub, Python and JavaScript. Everything else
          is written in the documentation ;){" "}
        </p>{" "}
        <br />
        <br />
      </div>
    );
  }
}

export default SectionPrototyping;
