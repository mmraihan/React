import React, { useState } from 'react'

export default function HOOKS_USESTATE2() {

    const [count, setCount] = useState(1)
    const handleInc=()=>{
        setCount(count +1)
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleInc}>Increment</button>
    </div>
  )
}
