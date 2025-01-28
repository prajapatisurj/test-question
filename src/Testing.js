import React, { useState } from "react";

const Testing = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const add = () => {
    if (!input) {
      return;
    } else {
      setItems([...items, input]);
      setInput("");
    }
    console.log(input);
  };
  return (
    <div>
      <input    
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add} disabled={!input}>
        Add
      </button>
    </div>
  );
};

export default Testing;
