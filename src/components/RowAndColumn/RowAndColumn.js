import React, { Component } from "react";
import "./RowAndColumn.css";
// -----------------------------------------------------*
class RowAndColumn extends Component {
  render() {
    return (
      <div className="main">
        <button type="reset" onClick={this.props.resetGrid} id="resetButton">
          Reset
        </button>
        <div className="row-column">
          <h3>Row</h3>
          <button onClick={this.props.decrementRow}>-</button>
          <button onClick={this.props.incrementRow}>+</button>
          <span>{this.props.setRowBadge*10}</span>
          <h3>Column</h3>
          <button onClick={this.props.decrementCol}>-</button>
          <button onClick={this.props.incrementCol}>+</button>
          <span>{this.props.setColBadge*10}</span>
        </div>
      </div>
    );
  }
}
export default RowAndColumn;
