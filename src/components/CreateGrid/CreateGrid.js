import React, { Component } from "react";

class CreateGrid extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggleShowGrid}>Create</button>
        <span></span>
      </div>
    );
  }
}

export default CreateGrid;
