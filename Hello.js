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
      <p>we can pass the method which is present in the parent component to the child component as props and can also access the values sent from child component in the parent component in the parameter of a function </p>
        <ChildComponent handleClick={this.handleClick}/>
      </div>
    );
  }
}
export default App
