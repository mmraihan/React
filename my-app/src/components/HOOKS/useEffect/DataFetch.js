import React, { useEffect } from 'react'
import { useState } from 'react'

export const DataFetch = () => {

    const [todos, setTodos]= useState(null)


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            return res.json();
        })

        .then((data)=>{
            setTodos(data);
            console.log(todos)
        });

    },[])

  return (
    <div>DataFetch
        <h1>
            {todos &&
            todos.map((todo)=>{
                return <p key={todo.id}>{todo.title}</p>
            })

            }
        </h1>
    </div>
  )
}
