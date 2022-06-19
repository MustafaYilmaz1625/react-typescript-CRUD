import React, { useState } from "react";

const defaultItem = [
  {
    name: "item A",
  },
  {
    name: "item B",
  },
  {
    name: "item C",
  },
];

function Todo() {
  const [text, setText] = useState("");
  const [item, setItem] = useState(defaultItem);

  const addItem = () => {
    () => setItem((prev) => [...prev, { name: text }]);
    setText("");
  };

  return (
    <div>
      <label>
        Text
        <input vlaue={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addItem}>Add</button>
      <br />
      <br />
      {item.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
