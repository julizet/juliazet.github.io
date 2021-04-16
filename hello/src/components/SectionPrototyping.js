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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis
          purus sit amet magna fermentum pharetra. Vivamus volutpat ante in
          felis dapibus semper. Aenean suscipit metus tristique odio sagittis,
          at pulvinar augue ultricies.{" "}
        </p>{" "}
        <br />
        <br />
      </div>
    );
  }
}

export default SectionPrototyping;
