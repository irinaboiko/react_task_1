import React, { Component } from "react";
import CounterView from "../../../commonComponents/CounterView";

class ClassCounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
    };
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue + 1;

      return {
        countValue: incrementedValue,
      };
    });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        const decrementedValue = state.countValue - 1;

        return {
          countValue: decrementedValue,
        };
      });
    }
  };

  handleReset = () => {
    this.setState({
      countValue: 0,
    });
  };

  render() {
    return (
      <CounterView
        countValue={this.state.countValue}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
      />
    );
  }
}

export default ClassCounterContainer;
