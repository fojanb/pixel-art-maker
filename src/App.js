import React, { Component } from 'react';
import GridMaker from "./components/GridMaker/GridMaker"
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <div className="App">
        <h1>Pixel Art Maker</h1>
        <GridMaker/>
      </div>
    );
  }
}
 
export default App;
