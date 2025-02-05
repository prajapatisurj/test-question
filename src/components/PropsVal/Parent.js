import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [child, setChild] = useState([]);

  const childData = (val) => {
    console.log("Child Data:", val);
    if (!val) {
      return 0;
    }
    setChild(val);
  };

  return (
    <div>
      {" "}
      <Child handleChildData={childData} />
      <h2>Child Data:</h2>
      <pre>{JSON.stringify(child, null, 2)}</pre>
      {child.name}
    </div>
  );
};

export default Parent;
