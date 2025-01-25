import React from "react";

const ChildOne = ({ handleChange }) => {
  const handleClick = () => {
    handleChange("child one clicked");
  };

  return (
    <div>
      <h1>Child One</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ChildOne;
