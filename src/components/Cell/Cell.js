import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./Cell.css";

const hoverStyle = keyframes`
0% {
  background: #C9F2EB linear-gradient(#C9F2EB 0%, #E1F9F5 49%, #D1DDDA 51%, #ADBBB8 100%);
  border-color: #C9F2EB #B6D7D1 #ADBBB8 #B6D7D1;
  box-shadow: 0 1px 3px rgba(191,110,38,0.5);
  }
  100% {
    background: #ADBBB8 linear-gradient(#ADBBB8 0%, #D1DDDA 98%, #E1F9F5 99%, #C9F2EB 100%);
    border-color: #ADBBB8 #B6D7D1 #C9F2EB #B6D7D1;
    box-shadow: 0 -1px 1px rgba(191,110,38,0.5);
  }`;
// Grid's cell - Styling
const StyledDiv = styled.div`
  display: flex;
  border: 1px solid #06d6a0;
//   background-color: #caffbf;
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
  state = {};

  render() {
    return <StyledDiv className="cell" id={this.props.id}></StyledDiv>;
  }
}

export default Cell;
