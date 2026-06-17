import { useState } from "react";

function State(){
    const [name , setname] = useState("sunil");
    return(
        <>
            <h1>{name}</h1>
             <button onClick={()=>setname("hari")}>
                change name
             </button>
        </>
    )
}
export default State;