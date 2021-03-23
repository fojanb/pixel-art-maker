import React, { Component } from "react";
import GridMaker from "./components/GridMaker/GridMaker";
import Grid from "./components/Grid/Grid";

import "./App.css";

class App extends Component {
  state = {
    Row: 0,
    Col: 0,
  };
  
  //-----------------Event Handlers (start)-------------*
  // -----Row------*
  incrementRowHandler = () => {
    let newRow = this.state.Row;
    newRow++;
    this.setState({ Row: newRow });
  };
  decrementRowHandler = () => {
    let newRow = this.state.Row;

    if (newRow === 0) {
      this.setState({ Row: newRow });
    } else if (newRow > 0) {
      newRow = newRow - 1;
    }
    this.setState({ Row: newRow });
  };
  // -----Column------*
  incrementColHandler = () => {
    let newCol = this.state.Col;
    newCol++;
    this.setState({ Col: newCol });
  };
  decrementColHandler = () => {
    let newCol = this.state.Col;

    if (newCol === 0) {
      this.setState({ Col: newCol });
    } else if (newCol > 0) {
      newCol = newCol - 1;
    }
    this.setState({ Col: newCol });
  };
  // Reset Button
  resetGridHandler = () => {
    this.setState({ Row: 0 });
    this.setState({ Col: 0 });
  };
  gridMakerHandler = () => {
    // Dynamic Grid using dynamic CSS in react
    console.log("Grid has been created!")
  }
  //-----------------Event Handlers (end)-------------*
  render() {
    const styles = {
      display:"grid",
      gridTemplateColumns: "repeat(4, 70px)",
      gridTemplateRows: "repeat(2, 40px)",
      backgroundColor: "green",
      margin: "auto",
    };
    return (
      <div className="App">
        <h1>Pixel Art Maker</h1>
        <GridMaker
          incrementRow={this.incrementRowHandler}
          setRowBadge={this.state.Row}
          decrementRow={this.decrementRowHandler}
          incrementCol={this.incrementColHandler}
          setColBadge={this.state.Col}
          decrementCol={this.decrementColHandler}
          resetGrid={this.resetGridHandler}
        />
        <div className="create-clear">
          <button onClick={this.gridMakerHandler}>Create</button>
          <button>Clear</button>
          <Grid/>
        </div>
      </div>
    );
  }
}

export default App;
