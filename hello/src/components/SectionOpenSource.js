import React, { Component } from "react";
import logo from "../assets/favicon.ico";
import { Card, Image, Text } from "theme-ui";

class SectionOpenSource extends Component {
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
          Open Source
        </h3>
        <div className="cardWrapper">
          <Card
            sx={{
              margin: 4,
              maxWidth: 220,
            }}
          >
            <Image src={logo} />
            <Text sx={{ textAlign: "center" }}> Beep</Text>
          </Card>
          <Card
            sx={{
              margin: 4,
              maxWidth: 220,
            }}
          >
            <Image src={logo} />
            <Text sx={{ textAlign: "center" }}> Meep</Text>
          </Card>
          <Card
            sx={{
              margin: 4,
              maxWidth: 220,
            }}
          >
            <Image src={logo} />
            <Text sx={{ textAlign: "center" }}> Clunk</Text>
          </Card>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default SectionOpenSource;
