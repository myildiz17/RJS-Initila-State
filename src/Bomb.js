// your Bomb code here!

import React, { Component } from 'react';
 
class Bomb extends Component {

    constructor(props){
        super(props)
        this.state ={
            secondsLeft: props.initialCount
        }
    }
  render() {
    //   debugger
    return (
        <p>{this.state.secondsLeft>0 ? `&lt;${this.state.secondsLeft}&gt; seconds left before I go boom!` : "Boom!"}</p>
    )
  }
}

export default Bomb