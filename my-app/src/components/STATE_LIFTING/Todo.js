import React from 'react'
import TodoSingle from './TodoSingle'

function Todo(props) {
    console.log(props.todos)
  return (
    <div>
        {props.todos.map((todo, index)=>
        <TodoSingle key ={index} todo ={todo}/>
            
        )}
    </div>
  )
}

export default Todo




