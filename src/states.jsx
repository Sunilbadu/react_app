import { useState } from "react";

function App() {
  // State: an array of items
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  // Add a new item
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <h2>My Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>  // map renders each item
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
  import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}</p>
      <p>Welcome to Day 2 of learning React!</p>
    </div>
  );
}

export default App;

}

export default App;
