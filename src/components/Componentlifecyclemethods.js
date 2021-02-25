import React, { Component } from "react";
import ReactDOM from "react-dom";

const course = [
  { id: 1, name: "Angular", educator: "Rob" },
  { id: 2, name: "React JS", educator: "John" },
  { id: 3, name: "Ajax", educator: "Mack" },
];

class Componentlifecyclemethods extends Component {
  state = {
    courseData: course,
    selected: false,
  };
  constructor(props) {
    super(props);
    console.log("Initialization phase constructor excecuted");
  }
  componentWillMount() {
    console.log("Mounting Phase: componentWillMount() will be excecuted");
  }
  render() {
    var users = this.state.courseData;
    console.log("Mounting Phase: render() excecuted");

    return (
      <div>
        <h4>UI Courses List</h4>
        <div>
          {users.map((userDetails) => {
            return (
              <div key={userDetails.id}>
                <b>Course:</b>
                {userDetails.name}
                <br />
                <b>Educator:</b>
                {userDetails.educator}
                <br />
                <button onClick={this.clickHandler}>Details</button>
              </div>
            );
          })}
        </div>
        <button onClick={this.exitComponent}>Exit</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("Mounting Phase: 'componentDidMount()' excecuted");
  }
  clickHandler = () => {
    console.log("Details Button is clicked State will change...");
    this.setState({ selected: true });
  };
  exitComponent = () => {
    console.log("Exit button is clicked, component will be destroyed");
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  componentWillUnmount = () => {
    console.log("Un-Mounting Phase: 'component will unmount' excecuted");
  };
}

export default Componentlifecyclemethods;
