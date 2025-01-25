import React, { useEffect, useState } from "react";

const Cart = () => {
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/carts ");
    const result = await data.json();
    setA(result);
  };
  const getData = async (index) => {
    const data = await fetch(`https://fakestoreapi.com/products/${index}`);
    const res = await data.json();
    setB(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(a);
    console.log(b);
  }, [a, b]);
  const getPrice = (index) => {
    console.log(index)
    return index * 10;
  };
  return (
    <div>
      <h1>Cart List</h1>
      <uL>
        {a.map((item, index) => (
          <li key={index}>
            {item.userId}
            <button onClick={() => getData(index)}>Get</button>
          </li>
        ))}
      </uL>
      <div>Products</div>
      <p>{b.id}</p>
      <p>{b.title}</p>
      <p>{b.category}</p>
      <button onClick={() => getPrice(b.price)}>{b.price}</button>
      <img src={b.image} alt={b.title} style={{ width: "150px" }} />
    </div>
  );
};

export default Cart;
