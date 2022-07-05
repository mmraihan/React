import React, { useEffect } from 'react'
import { useState } from 'react'


const loadingMessage = <p>
            Data is loading
        </p>

export const DataFetch = () => {

    const [todos, setTodos]= useState(null)
    const [isLoading, setLoading]= useState(true)


    useEffect(()=>{
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            return res.json();
        })

        .then((data)=>{
            setTodos(data);
            setLoading(false)
          
        });
        }, 2000);

    },[])

    const todosElement= todos &&
        todos.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        });
        
      

  return (
    <div>DataFetch
        <h1>
            {isLoading && loadingMessage}
           {todosElement}
        </h1>
    </div>
  )
}
