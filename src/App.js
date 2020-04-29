import React, { useReducer } from "react";
import "./App.css";
import {
  incrementCounter,
  decrementCounter,
  updateN,
  incrementByN,
  decrementByN,
  allowIncrementByN,
} from "./actions";
import { reducer } from "./reducers";

const initialState = {
  counter: 0,
  n: 0,
  allowed: true,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <div>{state.counter}</div>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        <div>
          <input
            type="text"
            onChange={(e) => dispatch(updateN(Number(e.target.value)))}
            disabled={!state.allowed}
          ></input>{" "}
          <br />
          <button
            onClick={() => dispatch(incrementByN())}
            disabled={!state.allowed}
          >
            Increment by N
          </button>
          <button
            onClick={() => dispatch(decrementByN())}
            disabled={!state.allowed}
          >
            Decrement by N
          </button>
          <br />
          <label>Check to disable increment By N</label>
          <input
            type="checkbox"
            onChange={() => dispatch(allowIncrementByN())}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
