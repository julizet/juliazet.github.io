import React, { Component } from "react";
import { Badge } from "theme-ui";

class Badges extends Component {
  render() {
    return (
      <div>
        <Badge p={1} ml={2} mb={1} bg={"secondary"} color={"#000"}>
          Civic
        </Badge>
        <Badge p={1} ml={2} mb={1} bg={"secondary"} color={"#000"}>
          Open Source
        </Badge>
        <Badge p={1} ml={2} mb={1} bg={"secondary"} color={"#000"}>
          Web Prototyping
        </Badge>
      </div>
    );
  }
}
export default Badges;
