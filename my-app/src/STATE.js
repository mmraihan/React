
import React, { Component } from 'react'

//Class component
export default class STATE extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
    }
  }
  handleIncrement=()=>{
    console.log("Clicked");
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
   

    const {count} = this.state //Destructure
    return (
    <div>
     <h1> count: {count}</h1>
        <button onClick={this.handleIncrement}>+</button>

    </div>
    )
  }
}





