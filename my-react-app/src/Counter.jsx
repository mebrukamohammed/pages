import {useState} from 'react';
function Counter(){
   
    const [currentCount , setCurrentCount]=useState(0);
    const increment=()=>{
        setCurrentCount(currentCount+1);}
    const decrement=()=>{
        setCurrentCount(currentCount-1);

    }
    const reset=()=>{
        setCurrentCount(0)
    }
    return(
        <div className="counter">
           <p className="count">{currentCount}</p>
           <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
           <button onClick={decrement}>Decrement</button>

        </div>
       
    )


    }


export default Counter