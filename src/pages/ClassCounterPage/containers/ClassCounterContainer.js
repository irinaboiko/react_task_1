import React, {Component} from "react";
import CounterView from "../../../commonComponents/CounterView";

class ClassCounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: 'even'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.countValue !== this.state.countValue) {
      this.setState({parityType: this.state.countValue % 2 ? 'odd' : 'even'})
    }
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue + 1;

      return {
        countValue: incrementedValue
      }
    })
  }

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        const decrementedValue = state.countValue - 1;

        return {
          countValue: decrementedValue
        }
      })
    }
  }

  handleReset = () => {
    this.setState({
      countValue: 0,
      parityType: 'even'
    })
  }

  render() {
    return (
      <CounterView
        countValue={this.state.countValue}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        parityType={this.state.parityType}
        handleReset={this.handleReset}
      />
    );
  }
}

export default ClassCounterContainer;