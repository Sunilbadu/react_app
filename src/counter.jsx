import { useState } from "react";

function Counter (){
    const [count , setcount] = useState(0)
    return(
        <>
            <h1>{count}</h1>
            
            <button onClick={ ()=>setcount(count + 1)}>+</button>
            <button onClick={()=>setcount(count - 1)}>-</button>
            <button onClick={()=>setcount(0)}>reset</button>
        </>
    )
}
export default Counter;