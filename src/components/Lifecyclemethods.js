import React, { Component } from "react";

class Lifecyclemethods extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.state = { secondElapsed: 0 };
  }
  start() {
    this.setState({ secondElapsed: this.state.secondElapsed + 1 });
  }
  // COMPONENT WILL MOUNT IS DEPRECATED
  componentWillMount() {
    alert("Component Mounted");
  }
  componentDidMount() {
    this.interval = setInterval(this.start, 1000);
  }

  render() {
    console.log(
      "render exccuting after change in state in component did mount"
    );
    return (
      <div>
        <h2>Second Elapsed: {this.state.secondElapsed}</h2>
      </div>
    );
  }
}

export default Lifecyclemethods;
