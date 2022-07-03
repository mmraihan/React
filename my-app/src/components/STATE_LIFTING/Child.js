import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <p>I am  Child</p>
        <p>{props.data}</p>
    </div>
  )
}
