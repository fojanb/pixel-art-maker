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
  draw = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    console.log(x,y);
    let cell = document.getElementById(this.props.id);
    // console.log(cell);
      cell.style.backgroundColor = "#06d6a0";

  }

  render() {
    return <StyledDiv onClick={(event)=>this.draw(event)} id= {this.props.id}></StyledDiv>;
  }
}

export default Cell;
