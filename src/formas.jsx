import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    alert("Hello " + name);
  };

  return (
    <>
      <h2>Simple React Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>You typed: {name}</p>
    </>
  );
}

export default Form;