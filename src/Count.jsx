import React from 'react'
import { useState } from 'react'
export default function Count() {
    const [count,setCount]=useState(0)
const incr=()=>
{
  
    (count<25) && setCount(count+1) 
   
}

  return (
    <div id='count'>
      <p>counter:{count}</p>
     
      <button onClick={incr}> + </button>
      <button onClick={()=>(count>0)&& setCount(count-1)}>-</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}
