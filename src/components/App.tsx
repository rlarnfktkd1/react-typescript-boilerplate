import React, { Component } from "react";
import "../styles/index.scss";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter></Counter>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
