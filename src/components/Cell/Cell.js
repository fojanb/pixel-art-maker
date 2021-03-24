import React, { Component } from "react";

class Cell extends Component {
  state = {};
  // Grid's cell
  styles = {
    display: "flex",
    border: "1px solid #06d6a0",
    backgroundColor: " #caffbf",
  };
  render() {
    return <div style={this.styles}></div>;
  }
}

export default Cell;
