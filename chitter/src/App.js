import React, { Component } from "react";
import Peeps from "./components/Peeps";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Peeps />
      </div>
    );
  }
}

export default App;
