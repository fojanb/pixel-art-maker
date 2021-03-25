import React, { Component } from "react";
import styled from "styled-components";
import "./GridMaker.css";
// -----------------------------------------------------*
// Grid container
const StyledGridContainer = styled.div`
  // regular CSS goes here :
  // *Dynamic grid via dynamic 'styled-component'*
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, 10px);
  grid-template-rows: repeat(${(props) => props.numberOfRows}, 10px);
  margin: 0 auto;
  justify-content: center;
  align-item: center;
  margin-top: 20px;
  cursor: cell;
`;
class GridMaker extends Component {
  render() {
    return (
      <StyledGridContainer
        numberOfColumns={this.props.columns*10}
        numberOfRows={this.props.rows*10}
      >
        {this.props.children}
      </StyledGridContainer>
    );
  }
}

export default GridMaker;
