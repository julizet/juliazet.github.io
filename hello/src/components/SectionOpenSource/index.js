import React, { Component } from "react";
import logo from "../../assets/favicon.ico";
import { Card, Image, Text } from "theme-ui";
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
