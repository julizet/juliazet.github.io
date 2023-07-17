import React, { Component } from "react";
import Tag from "../Tag";

class SectionCivic extends Component {
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
          Civic
        </h3>
        <p>
          {" "}
          We are moving into the age of digital mass production. More and more
          software, apps and programs are being created that often end up being
          very similar. Fortunately, some of these applications are published as
          open source code, usable for free, for everybody. By helping cities and
          municipalities to set up already existing, proven open source solutions
          we can provide digital solutions that really add value.
          Away from mass production, towards sustainable deployment.{" "}
        </p>{" "}
        <br />
      </div>
    );
  }
}

export default SectionCivic;
