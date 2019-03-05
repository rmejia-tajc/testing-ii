import React, { Component } from "react";

import "./App.css";
import Display from "./display/Display.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>B-BALL APP</h1>
        <Display />
      </div>
    );
  }
}

export default App;