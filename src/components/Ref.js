import React, { useState } from "react";

const Ref = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length > 0 && value.length <= 3) {
      setError("Please enter a name with at least 4 characters");
    } else {
      setError("");
    }
  };

  const handleClick = () => {
    if (name.trim().length > 3) {
      console.log(name);
      setError("");
    } else {
      setName("");
      setError("Please enter a name with at least 4 characters");
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Ref;
