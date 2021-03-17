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
          <button>-</button>
          <button>+</button>
          <span class="w3-badge w3-green">0</span>
        </div>
        <div className="row-column">
          <h3>Column</h3>
          <button>-</button>
          <button>+</button>
          <span class="w3-badge w3-green">0</span>
        </div>
        <div className="create-clear">
          <CreateGrid />
          <ClearGrid />
        </div>
      </div>
    );
  }
}

export default GridMaker;
