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
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Timer</h1>

      <h2>{time} seconds</h2>

      <button onClick={() => setRunning(true)}>Start</button>

      <button onClick={() => setRunning(false)} style={{ marginLeft: "10px" }}>
        Stop
      </button>

      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
export default Counter;