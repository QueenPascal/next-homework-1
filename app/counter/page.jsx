"use client"
import React, { useState } from 'react'

function counterPage() {
    // change number from variable to state
    // That will let nextjs update the v-DOM upon the state changes
    const [number, setNumber] = useState(0)
    
  return (
      <div>
          
          <h1>{number}</h1>
          <button className='w-50 h-30 rounded bg-pink-300' onClick={() => setNumber(number +1)}>click</button>
        
      
      </div>
  )
}

export default counterPage