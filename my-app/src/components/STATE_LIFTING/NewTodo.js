import React, { useState } from 'react'

export default function NewTodo() {
const [todo, setTodo]= useState("");
const handle=(event)=>{
setTodo(event.target.value)
}

const handle2=(event)=>{

    event.preventDefault();
    
}

  return (
    <form onSubmit={handle2}>
        <label htmlFor='todo'>New Todo: </label>
        <input type="text" id ="todo" name ="todo" value={todo} onChange={handle}/>

        <button>Add Todo</button>
    </form>

   
  )
}
