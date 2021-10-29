import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div data-test='component-counter'>
        <h2 data-test='counter-display'>Count: {counter}</h2>
        <button data-test='increment-button' onClick={this.increment}>
          Increment
        </button>
        <button data-test='decrement-button' onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
