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

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Hello name="badu " age  = {15} />
      <Hello name="welcome" age  = {15}/>
      <Hello name="okY" age  = {25} />
    </div>
  );
}

export default App;
