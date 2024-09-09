import { useState, useRef } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  let intervalRef = useRef();

  const handleCounterStart = () => {
    intervalRef.current = setInterval(() => {
      console.log(count);
      setCount((count) => count + 1);
    }, 1000);
    // setCount((count) => count + 1);
  };

  const handleCounterStop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleCounterStart}>Start</button>
      <button onClick={handleCounterStop}>Stop</button>
    </div>
  );
};
