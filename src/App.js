// This app demonstrates the successful install and use of Proptypes. See VehicleList.js.

import React from "react";
import vehicleArray from "./vehicleArray";
import VehicleList from "./VehicleList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { vehicleArray: vehicleArray };
  }

  render() {
    return (
      <div className="App">
        <h1>All Vehicles MUST Go!</h1>
        <VehicleList vehicleArray={this.state.vehicleArray} />
      </div>
    );
  }
}

export default App;
