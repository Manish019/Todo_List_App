import React, { useState } from 'react'

const UseStatepage = () => {

// useState is a React Hook that lets you add state to function components.

    //const [state, setState]  =  useState();

    const [count, setCount] = useState(0); // Initializing count state with 0




  // Function to handle incrementing the count

     function handleInc() {
     // console.log("incrementing count");
         setCount(11);
     }


// Function to handle decrementing the count
     function handleDec() {
    //console.log("decrementing count");
         setCount(1);

     }





  return (
    <>
      <h1 className='text-3xl font-bold underline'>UseState Hook</h1>
    <button onClick={handleInc}>Count +</button>
     <h1>Counter: {count}</h1>

    <button onClick={handleDec}>Count -</button>
    
    
    </>

  )
}

export default UseStatepage