import React, { Component } from "react";
import styled from "styled-components";
import "./Grid.css";
// -----------------------------------------------------*
// Grid container
const StyledGridContainer = styled.div`
  // regular CSS goes here :
  // *Dynamic Grid*
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, 20px);
  grid-template-rows: repeat(${(props) => props.numberOfRows}, 20px);
  margin: 0 auto;
  justify-content: center;
  align-item: center;
  margin-top: 20px;
`;
// Grid's cell
const StyledGridCells = styled.div`
  display: flex;
  border: 1px solid #06d6a0;
  background-color: #caffbf;
  &:hover {
    background-color: #06d6a0;
  }
`;

class Grid extends Component {
  state = {};

  gridCellMaker = () => {
    for (let i = 0; i < this.props.numberOfColumns*this.props.numberOfRows; i++) {
        //   Create grid's cell
        let gridCell = document.createElement("div");
        document.querySelector("gridContainer").appendChild(gridCell);
      }
    
  };
  render() {
    return (
      <StyledGridContainer
        id="gridContainer"
        numberOfColumns={this.props.columns}
        numberOfRows={this.props.rows}
      >
        <StyledGridCells></StyledGridCells>
      </StyledGridContainer>
    );
  }
}

export default Grid;
