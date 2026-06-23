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

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>
    </>
  );
}

export default App;

export default App;
