import React, { Component } from 'react';

export default function Child(props){
  return (
    <div>
    <button onClick={() => props.handleClick(`child`)}>click me </button>
    </div>
  )
}