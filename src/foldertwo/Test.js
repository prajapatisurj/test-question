import React, { useState } from "react";
import ChildOne from "../folderone/ChildOne";

const Test = () => {
  const [data, setData] = useState("");

  const handleChange = (value) => {
    console.log("Value received from child:", value);
    setData(value); 
  };

  return (
    <div>
      <p>Test Folder</p>
      <p>{data}</p> 
      <ChildOne handleChange={handleChange} />
    </div>
  );
};

export default Test;
