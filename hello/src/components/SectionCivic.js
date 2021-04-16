import React, { Component } from "react";

class SectionCivic extends Component {
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
          Civic
        </h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis
          purus sit amet magna fermentum pharetra. Vivamus volutpat ante in
          felis dapibus semper. Aenean suscipit metus tristique odio sagittis,
          at pulvinar augue ultricies. Donec aliquet enim id molestie cursus.
          Sed justo quam, rutrum eu egestas eget, hendrerit convallis enim.
          Pellentesque vel nisi sit amet lorem aliquet ultrices eget non quam.
          Suspendisse rutrum leo non sem ultrices, vitae volutpat ante molestie.
          Nunc viverra tellus ex, id gravida massa efficitur elementum. Proin
          non sem vel sem ultricies eleifend sed a massa. Vivamus sed
          consectetur velit. Aliquam eu sollicitudin metus, sit amet mollis
          tellus. Aliquam mattis gravida felis eget tincidunt. Ut faucibus
          tortor eget fringilla rutrum. Fusce dictum nisl eget dolor mollis
          tristique. Suspendisse potenti. Nullam ex arcu, interdum id bibendum
          id, fringilla sit amet turpis.{" "}
        </p>{" "}
      </div>
    );
  }
}

export default SectionCivic;
