import React, { Component } from "react";
import RowAndColumn from "./components/RowAndColumn/RowAndColumn";
import GridMaker from "./components/GridMaker/GridMaker";
import Cell from "./components/Cell/Cell";
import "./App.css";
// -----------------------------------------------------*
class App extends Component {
  state = {
    Row: 0,
    Col: 0,
    showGrid: false,
  };

  //-----------------Event Handlers (start)-------------*
  // -----Add Row------*
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
  // -----Add Column------*
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
  showGridHandler = () => {
    // Dynamic Grid using dynamic CSS in react
    // console.log("Grid has been created!");
    let doesShow = this.state.showGrid;
    this.setState({ showGrid: !doesShow });
  };

  //-----------------Event Handlers (end)-------------*
  render() {
    let grid = null;
    let cells = [];
    if (this.state.showGrid) {
      for (let i = 0; i < this.state.Row*this.state.Col; i++) {
        cells.push(<Cell id={i}/>);
      }
      // console.log(cells);
      grid = (
        <div>
          <GridMaker columns={this.state.Col} rows={this.state.Row}>
            {/* We need 'props.children' here */}
            {cells}
          </GridMaker>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Pixel Art Maker</h1>
        <RowAndColumn
          incrementRow={this.incrementRowHandler}
          setRowBadge={this.state.Row}
          decrementRow={this.decrementRowHandler}
          incrementCol={this.incrementColHandler}
          setColBadge={this.state.Col}
          decrementCol={this.decrementColHandler}
          resetGrid={this.resetGridHandler}
        />
        <div className="create-clear">
          <button onClick={this.showGridHandler}>Create</button>
          <button onClick={this.resetGridHandler}>Clear</button>
        </div>
        {grid}
      </div>
    );
  }
}

export default App;
