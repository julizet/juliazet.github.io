import React from "react";
var ReactRotatingText = require("react-rotating-text");

const Rotation = () => {
  return (
    <h1>
      Hej, my name is
      <ReactRotatingText
        items={[
          " julizet",
          " juliazet",
          " J.Z.",
          " juliazet0",
          " Julia Zet",
          " Julia",
        ]}
      />
    </h1>
  );
};

export default Rotation;
