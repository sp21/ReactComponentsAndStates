import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Statesinreact from "./components/Statesinreact";
import Componentlifecyclemethods from "./components/Componentlifecyclemethods";
import Lifecyclemethods from "./components/Lifecyclemethods";
import Parent from "./components/nesting/Parent";
class App extends Component {
  state = {
    counter: 0,
    message: "",
  };
  incrementCounter=()=>{
this.setState({counter:this.state.counter+1,message:"Button Clicked"})

  }
  render() {
    return <div>
      <button className="btn btn-primary" onClick={this.incrementCounter}>Click</button>
      <h3 style={{color:"lightblue"}}>{this.state.message} has clicked {this.state.counter} times</h3>
      <Statesinreact/>
      <Componentlifecyclemethods/>
      <Lifecyclemethods/>
      <Parent/>
    </div>;
  }
}

export default App;
