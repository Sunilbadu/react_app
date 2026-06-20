import { useState } from "react";

function Forms() {
    const [name , setname] = useState("");
    return(
        <>
        <input type="text" 
        value={name} 
        onChange={(e)=> setname(e.target.value)}
        />
        <h2>hello {name}</h2>
        </>
    )
}
 export default Forms;