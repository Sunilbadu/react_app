import { useState } from "react";

function Name(){

    const[name , setname] = useState("")
    const[age , setage] = useState()
    const[sname ,showname]= useState("")
    const[sage , showage] = useState()

    const set =()=>{
            showage(age);
            showname(name);
    }
    return(
        <>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="number" value={age} onChange={(e)=>setage(e.target.value)}/>
        <button onClick={set}>show details</button>
        <h1>{sname} {sage}</h1>
        </>
    )
}
export default Name;