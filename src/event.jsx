
function Event () {
    const greet = (name)=>{
    alert(`hello ${name}`);
};
    return(
        <>
        <button onClick={()=>greet("sunil")}>clickme</button>
        </>
    )
}

export default Event;
// function App() {
//   const name = "sunil";
//   return(
//     <div>
//       <p>hello {name}</p>
//       <p>welcome to the day 1 of learning react and this is app off sunil</p>
//     </div>
//   )
// }

// export default App;
import Hello  from "./Hello";
import State from "./state";
import Use from "./typeusestate";
import Counter from "./counter";
import Event from "./event";
import Forms from "./form";
import Name from "./mini";
import Mapy from "./nap";

import { useState } from "react";
function handleSubmit(e){
  e.preventDefault();
  alert("your form submitted sucessfully")
}

function App() {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
  

  return(
<>
  
<form onSubmit={handleSubmit}>
   <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="email" placeholder="abc@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="number" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
    <button type="submit">submit</button>
</form>
   
</>
  )

}


export default App;

