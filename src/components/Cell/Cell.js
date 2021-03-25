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
      let cell = document.getElementById(this.props.id);
    //   console.log(cell);
      cell.style.backgroundColor = "#06d6a0";

  }

  render() {
    return <StyledDiv onClick={this.draw} id= {this.props.id}></StyledDiv>;
  }
}

export default Cell;
