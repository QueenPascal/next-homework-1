"use client"
import React from 'react'

function counterPage() {
    let number = 0

    const increaseNumber = () => {
        number++
        console.log("number increasing", number)
    }
    increaseNumber()

  return (
      <div>
          
          <h1>{number}</h1>
          {/* The next line generating error... */}

          {/* The error telling us something very important */}
          {/* onClick att can't be passed into server component */}
          {/* nextjs components are server component in defaut, do you remeber how to change that? */}
          {/* look at the top of this document for the anser ;) */}

          {/* you'll notice that the logs now are moved to the browser side, but still the increased number is not rendered! why? */}
          <button onClick={increaseNumber}>click</button>
        
      
      </div>
  )
}

export default counterPage