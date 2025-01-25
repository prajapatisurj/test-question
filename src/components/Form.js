import React, { useRef, useState } from "react";

const Form = () => {
  const inputRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const val = inputRef.current.value;
    if (!val) {
      setError("Input field cannot be empty");
    } else if (val.length < 3) {
      setError("Input should be at least 3 characters long");
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      {error && <p>{error}</p>}
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Form;
