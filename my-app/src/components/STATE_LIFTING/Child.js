import React from 'react'

export const Child = (props) => {

const data = "I am from Child"
props.onChildData(data)

  return (
    <div>
        <p>I am  Child</p>
        <p>{props.data}</p>
    </div>
  )
}
