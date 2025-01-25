import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const add = (e) => {
    e.preventDefault();
    if (input) {
      setList([...list, input]);
    }
    setInput("");
  };
  const del = (val) => {
    setList(list.filter((i, item) => item !== val));
  };
  return (
    <div>
      <h1>To Do</h1>
      <input
        type="test"
        placeholder="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add</button>
      {list.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => del(index)}>Del</button>
        </li>
      ))}
    </div>
  );
};

export default Todo;
