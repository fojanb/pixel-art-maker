import React, { Component } from "react";
import "./GridMaker.css";
class GridMaker extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <button type="reset">Reset</button>
        <div className="row-column">
          <h3>Row</h3>
          <button>-</button>
          <button>+</button>
        </div>
        <div className="row-column">
          <h3>Column</h3>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default GridMaker;
