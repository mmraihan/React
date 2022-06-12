import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changeValue: ''
      }
    }

    handleCick = (e)=>{
  
        this.setState({
            changeValue : e.target.value
        }, ()=>{
            console.log(this.state.changeValue)
        })
        
    }

  render() {
    return (
        <div>
            <input type="text" onChange={this.handleCick}/>
            <p>{this.state.changeValue}</p>
        </div>
   
    
    )
  }
}
