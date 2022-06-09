
import React, { Component } from 'react'

//Class component
export default class STATE extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
    }
  }

  render() {
    return (
    <div>
     <h1> count: {this.state.count}</h1>
    </div>
    )
  }
}
