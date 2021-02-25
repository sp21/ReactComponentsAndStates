import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  action ="'props from parent'";
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2>
            <b>Nesting</b>
          </h2>
          <h1>Hi Im Parent Component</h1>
          <Child />
          <Child action={this.action} />
        </div>
      </div>
    );
  }
}

export default Parent;
