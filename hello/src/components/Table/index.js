import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Plant</th>
        <th>Water</th>
        <th>Sunlight</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.water}</td>
        <td>{row.sunlight}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

// A class component must include render(), and the return can only return one parent element.
class Table extends Component {
  render() {
    const { characterData } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}
export default Table;
