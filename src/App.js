import "./App.css";
import { useRef, useReducer } from "react";
import { PreviousValue } from "./components/PreviousValue.jsx";
import { Counter } from "./components/Counter.jsx";
import { handleFormStates } from "./reducers/handleFormStates.js";
import { ProductsPage } from "./components/ProductsPage.jsx";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const initialFormState = {
    firstName: "",
    age: "",
    branch: "",
    showData: false,
  };

  const [form, dispatch] = useReducer(handleFormStates, initialFormState);

  return (
    <>
      {/* <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div> */}
      {/* <PreviousValue /> */}
      {/* <Counter />
      <fieldset>
        <legend>Enter the details</legend>
        <div>
          <label>FirstName: </label>
          <input
            type="text"
            onChange={(e) =>
              dispatch({ type: "firstName", payload: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            onChange={(e) => dispatch({ type: "age", payload: e.target.value })}
          ></input>
        </div>
        <div>
          <label>Branch: </label>
          <input
            type="text"
            onChange={(e) =>
              dispatch({ type: "branch", payload: e.target.value })
            }
          ></input>
        </div>
      </fieldset>

      <button onClick={() => dispatch({ type: "showData", payload: true })}>
        Submit
      </button>
      {form.showData ? (
        <div>
          <p>First-Name: {form.firstName}</p>
          <p>Age: {form.age}</p>
          <p>Branch: {form.branch}</p>
        </div>
      ) : (
        ""
      )} */}
      <ProductsPage />
    </>
  );
}

export default App;
