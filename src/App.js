import "./App.css";
import { useRef } from "react";
import { PreviousValue } from "./components/PreviousValue.jsx";
import { Counter } from "./components/Counter.jsx";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <PreviousValue />
      <Counter />
    </>
  );
}

export default App;
