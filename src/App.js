import React, { Component } from 'react';
import GridMaker from "./components/GridMaker/GridMaker"
import './App.css';

class App extends Component {
  state = { 
    incRow : 0,
    decRow : 0,
    incCol : 0,
    decCol : 0 
   }
//-----------------Event Handlers-------------
incrementRowHandler = () => {
  let newIncRow = this.state.incRow;
  newIncRow++;
  this.setState({incRow : newIncRow});

}
// -------------------------------------------
  render() { 
    return (  
      <div className="App">
        <h1>Pixel Art Maker</h1>
        <GridMaker incrementRow={this.incrementRowHandler} setIncBadge ={this.state.incRow} />
      </div>
    );
  }
}
 
export default App;
