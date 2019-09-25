import React, { Component } from 'react';

export default function Child(props){
  return (
    <div>
    <button onClick={() => props.handleClick(`child`)}>click me </button>
    <h4>we can access the method which is present in the parent component using props and we can pass value from the child component to parent component using arrow functions </h4>
    </div>
  )
}