import React, { Component } from 'react';
import ChildComponent from "./Child.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'parent'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(childName){
    alert(`hello ${this.state.name} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent handleClick={this.handleClick}/>
      </div>
    );
  }
}
export default App
