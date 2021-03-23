import React, { Component } from "react";
import styled from "styled-components";
// -----------------------------------------------------*
const StyleDiv = styled.div`
  // regular CSS goes here :
  //   Dynamic Grid
  display: grid;
  grid-template-columns: repeat(2, 70px);
  grid-template-rows: repeat(2, 70px);
  margin: 0 auto;
  background-color: red;
  border: 1px solid black;
  margin-top : 20px;
`;
class Grid extends Component {
  state = {};
  render() {
    return (
      <StyleDiv
        numberOfcolumns={this.props.columns}
        numberOfrows={this.props.rows}
      ></StyleDiv>
    );
  }
}

export default Grid;
