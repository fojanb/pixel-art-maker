import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./Cell.css";

const hoverStyle = keyframes`
0% {
    background-color: #caffbf;
    border-color: #06d6a0;
    }
    100% {
      background-color: #06d6a0;
      border-color: #06d6a0;
    }`;
// Grid's cell - Styling
const StyledDiv = styled.div`
  display: flex;
  border: 1px solid #06d6a0;
  background-color: #06d6a0;
  animation-name: ${hoverStyle};
  animation-duration: 100ms;
  animation-fill-mode: backwards;
  &:active,
  &:focus,
  &:hover {
    animation-fill-mode: forwards;
  }
`;
class Cell extends Component {
  stop = () => {
    let cell = document.getElementById(this.props.id);
    cell.style.backgroundColor = "#caffbf";
  };

  render() {
    return (
      <StyledDiv
        className="cell"
        onClick={this.stop}
        id={this.props.id}
      ></StyledDiv>
    );
  }
}

export default Cell;
