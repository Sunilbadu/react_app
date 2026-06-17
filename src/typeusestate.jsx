import { useState } from "react";

function Use(){
    const [name , setname] = useState("")
    return(
        <>
            <input type="text" onChange={(e)=>{
                setname(e.target.value)
            }}
            
             />
             <h1>{name}</h1>
        </>
    )
}

export default Use;