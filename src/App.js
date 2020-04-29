import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else {
    return state;
  }
}

const initialState = {
  counter: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <div>{state.counter}</div>
        <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_COUNTER" })}>
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
