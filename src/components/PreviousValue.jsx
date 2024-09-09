import React, { useState, useRef, useEffect } from "react";

export function PreviousValue() {
  const [value, setValue] = useState("");
  const prevValueRef = useRef();

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);
  // prevValueRef.current = value;
  console.log(value);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValueRef.current}</p>
    </div>
  );
}
