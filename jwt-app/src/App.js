import './App.css';
import React, { Component } from 'react'

export default class App extends Component {

  constructor (){
    super();
    this.state={
      username: null,
      password: null,
     

    }
  }


  login(){
    console.warn("form data", this.state)
    fetch(`https://localhost:44328/api/account/login`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
                },
    body:JSON.stringify(this.state)
    }).then((respo)=>{
      respo.json().then((result)=>{
        console.warn(result);
      })
    })
  }

  render() {
    return (
      <div>

  <h1>JWT Token</h1>
      <div>
        <input type="text" onChange={(event)=>{
          this.setState({username:event.target.value})
        }}></input> <br></br> <br></br>

  <input type="password" onChange={(event)=>{
          this.setState({password:event.target.value})
        }}></input> <br></br> <br></br>
        <button onClick={()=>this.login()}>Login</button>
      </div>
      </div>
    )
  }
}

