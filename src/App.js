import React from "react";
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
import { CreateStore } from "./store";

function App() {
  const store = CreateStore(reducer);
  return (
    <div className="App">
      <header className="App-header">
        <div>{store.getState().counter}</div>
        <button onClick={() => store.dispatch(incrementCounter())}>
          Increment
        </button>
        <button onClick={() => store.dispatch(decrementCounter())}>
          Decrement
        </button>
        <div>
          <input
            type="text"
            onChange={(e) => store.dispatch(updateN(Number(e.target.value)))}
            disabled={!store.getState().allowed}
          ></input>{" "}
          <br />
          <button
            onClick={() => store.dispatch(incrementByN())}
            disabled={!store.getState().allowed}
          >
            Increment by N
          </button>
          <button
            onClick={() => store.dispatch(decrementByN())}
            disabled={!store.getState().allowed}
          >
            Decrement by N
          </button>
          <br />
          <label>Check to disable increment By N</label>
          <input
            type="checkbox"
            onChange={() => store.dispatch(allowIncrementByN())}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
