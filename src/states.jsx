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
}

export default App;
