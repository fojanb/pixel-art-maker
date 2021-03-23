import React, { Component } from "react";
import CreateGrid from "../CreateGrid/CreateGrid";
import ClearGrid from "../ClearGrid/ClearGrid";
import "./GridMaker.css";

class GridMaker extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <button type="reset">Reset</button>
        <div className="row-column">
          <h3>Row</h3>
          <button onClick={this.props.decrementRow}>-</button>
          <button onClick={this.props.incrementRow}>+</button>
          <span>{this.props.setRowBadge}</span>
        </div>
        <div className="row-column">
          <h3>Column</h3>
          <button onClick={this.props.decrementCol}>-</button>
          <button onClick={this.props.incrementCol}>+</button>
          <span>{this.props.setColBadge}</span>
        </div>
        <div className="create-clear">
          <CreateGrid />
          <ClearGrid />
        </div>
        {/* We need "dynamic CSS" here */}
        <div class="grid">

        </div>
      </div>
    );
  }
}

export default GridMaker;
