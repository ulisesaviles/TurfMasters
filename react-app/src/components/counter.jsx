import React, { Component } from "react";
import "../App.css";
import { Slide } from "react-awesome-reveal";

class Counter extends Component {
  state = {
    count: 0,
    name: "Daniela",
  };

  render() {
    return (
      <div>
        <h1 className="test">{this.formatCount(this.state.count)}</h1>
        <Slide>
          <button
            className="btn"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increment
          </button>
        </Slide>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
