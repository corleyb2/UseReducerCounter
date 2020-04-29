import React, { useReducer } from "react";
import "./App.css";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  INCREMENT_BY_N,
  DECREMENT_BY_N,
  ALLOW_INCREMENT_BY_N,
  incrementCounter,
  decrementCounter,
  updateN,
  incrementByN,
  decrementByN,
  allowIncrementByN,
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case UPDATE_N:
      // console.log("action for updateN", action);
      return { ...state, n: action.n };
    case INCREMENT_BY_N:
      return { ...state, counter: state.counter + state.n };
    case DECREMENT_BY_N:
      return { ...state, counter: state.counter - state.n };
    case ALLOW_INCREMENT_BY_N:
      return { ...state, allowed: !state.allowed };
    default:
      return state;
  }
}

const initialState = {
  counter: 0,
  n: 0,
  allowed: true,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
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
