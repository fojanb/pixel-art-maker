import React, { Component } from "react";
import styled from "styled-components";
import "./Grid.css";
// -----------------------------------------------------*
// StyledDiv is grid container
const StyleDiv = styled.div`
  // regular CSS goes here :
  //   Dynamic Grid
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, 20px);
  grid-template-rows: repeat(${(props) => props.numberOfRows}, 20px);
  margin: 0 auto;
  justify-content: center;
  align-item: center;
`;
class Grid extends Component {
  state = {};
  render() {
    return (
      <StyleDiv
        numberOfColumns={this.props.columns}
        numberOfRows={this.props.rows}
      ></StyleDiv>
    );
  }
}

export default Grid;
