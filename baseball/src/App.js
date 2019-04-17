import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ballCount: 0,
      strikeCount: 0
    };
  }

  strikeHandler = event => {
    if (this.state.strikeCount === 3) {
      this.setState({ strikeCount: 0, ballCount: 0 });
    } else {
      this.setState({ strikeCount: this.state.strikeCount + 1 });
    }
  };

  ballHandler = event => {
    event.preventDefault();

    if (this.state.ballCount === 4) {
      this.setState({ strikeCount: 0, ballCount: 0 });
    } else {
      this.setState({ ballCount: this.state.ballCount + 1 });
    }
  };

  hitHandler = event => {
    this.setState({ strikeCount: 0, ballCount: 0 });
  };

  foulHandler = event => {
    if (this.state.strikeCount == 0) {
      this.setState({ strikeCount: 1 });
    } else if (this.state.strikeCount == 1) {
      this.setState({ strikeCount: 2 });
    }
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.ballCount} strike={this.state.strikeCount} />
        <Dashboard
          strikeHandler={this.strikeHandler}
          ballHandler={this.ballHandler}
          foulHandler={this.foulHandler}
          hitHandler={this.hitHandler}
        />
      </div>
    );
  }
}

export default App;
