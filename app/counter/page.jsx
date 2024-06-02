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
          {/* <button onClick={increaseNumber}>click</button> */}

          <button>click</button>
        
      
      </div>
  )
}

export default counterPage