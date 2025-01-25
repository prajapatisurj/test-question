import React, { useState, useRef } from 'react';

const TestChild = () => {
  const [start, setStart] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setStart((prevStart) => prevStart + 1);
      }, 500);
    }
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    handleStop(); // Stop the interval
    setStart(0);  // Reset the counter
  };

  return (
    <div>
      <h1>Counter: {start}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TestChild;
