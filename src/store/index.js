import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  n: 0,
  allowed: true,
};

export function CreateStore(reducer) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  function getState() {
    return { ...state };
  }
  return { getState, dispatch };
}
