"use client"
import React from 'react'

function counterPage() {
    let number = 0
    number +=5

    

  return (
      <div>
          
          <h1>{number}</h1>
          <button className='w-50 h-30 rounded bg-pink-300' onClick={() => number += 1}>click</button>
        
      
      </div>
  )
}

export default counterPage