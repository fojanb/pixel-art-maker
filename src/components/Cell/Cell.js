import React, { Component } from "react";
import styled from "styled-components";

// Grid's cell - Styling
const StyledDiv = styled.div`
  display: flex;
  border: 1px solid #06d6a0;
  background-color: #caffbf;
  &:hover {
    background-color: #06d6a0;
  }
`;
class Cell extends Component {
  state = {};
  draw = () => {

  }

  render() {
    return <StyledDiv onClick={this.draw}></StyledDiv>;
  }
}

export default Cell;
