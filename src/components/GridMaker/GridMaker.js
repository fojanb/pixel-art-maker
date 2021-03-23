import React, { Component } from "react";
import "./GridMaker.css";

class GridMaker extends Component {
  state = {
    showGrid: false,
  };
  //-----------------Event Handlers (start)-------------*
  // Toggle
  toggleShowGridHandler = () => {
    const doesShow = this.state.showGrid;
    this.setState({ showGrid: !doesShow });
  };
  //-----------------Event Handlers (end)-------------*
  render() {
    // let grid = null;
    // if(this.state.showGrid){
    //   // Show grid
    //   grid = <div>Grid is here</div>
    // }
    return (
      <div className="main">
        <button type="reset" onClick={this.props.resetGrid} id="resetButton">
          Reset
        </button>
        <div className="row-column">
          <h4>Row</h4>
          <button onClick={this.props.decrementRow}>-</button>
          <button onClick={this.props.incrementRow}>+</button>
          <span>{this.props.setRowBadge}</span>
          <h4>Column</h4>
          <button onClick={this.props.decrementCol}>-</button>
          <button onClick={this.props.incrementCol}>+</button>
          <span>{this.props.setColBadge}</span>
        </div>
        {/* <div className="create-clear">
          <CreateGrid toggleShowGrid={this.toggleShowGridHandler} />
          <ClearGrid />
        </div> */}
        {/* We need "dynamic CSS" here */}
        {/* <div class="grid"></div> */}
      </div>
    );
  }
}

export default GridMaker;
