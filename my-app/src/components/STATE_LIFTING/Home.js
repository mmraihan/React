import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todo from "./Todo";

const dummyTodos = ["todo1", "todo2"];

export default function Home() {
const [todos, setTodos] =useState(dummyTodos);

const handleNewTodo = (newTodo)=>{
    console.log(newTodo)
}
  return (

   
    <div>
        <NewTodo onTodo = {handleNewTodo}/>
      <Todo todos = {todos} />
    </div>
  )
}
