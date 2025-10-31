import React, { useState } from 'react'

const Form = () => {
 const[count,setcount]=useState(0)

 let increment=()=>{
    setcount(count+1)
 }
 let decrement=()=>{
      setcount(count-1)
 }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button className='ml-10' onClick={decrement}>decrement</button>

    </div>
  )
}

export default Form