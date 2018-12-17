import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    )
  };
}

render(<App />, document.getElementById("app"))