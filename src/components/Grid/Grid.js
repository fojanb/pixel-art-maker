import React, { Component } from "react";
import styled from "styled-components";
import "./Grid.css";
// -----------------------------------------------------*
// *StyledDiv* is our grid container.
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


class Grid extends Component {
  state = {};

  gridCellMaker = () => {
    for (let i = 0; i < this.props.numberOfColumns; i++) {
      for (let j = 0; j < this.props.numberOfRows; j++) {
        let gridCell = document.createElement("div");
        gridCell.classList.add('cellStyle');
        document.querySelector("gridContainer").appendChild(gridCell);
      }
    }
  };

  render() {
    return (
      <StyledGridContainer
        id="gridContainer"
        numberOfColumns={this.props.columns}
        numberOfRows={this.props.rows}
      >
        {this.gridCellMaker()}
      </StyledGridContainer>
    );
  }
}

export default Grid;
