import React, { useState, useEffect } from "react";

const Child = ({ handleChildData }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("Parent component updated");
  }, [data]);
  const getVal = (val) => {
    console.log("Value:", val)
    handleChildData(val);
  };
  return (
    <div>
      <h1>Child</h1>
      {data.map((item, index) => (
        <p key={index}>
          {item.name} <button onClick={() => getVal(item)}>Get</button>
        </p>
      ))}
    </div>
  );
};

export default Child;
