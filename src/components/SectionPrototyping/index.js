import React, { Component } from "react";
import Tag from "../Tag";

class SectionPrototyping extends Component {
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
