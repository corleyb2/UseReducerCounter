import { useReducer } from "react";

export function CreateStore(reducerfn) {
  const [state, dispatch] = useReducer(reducerfn, reducerfn(undefined, ""));
  console.log(state);
  // return { state, dispatch }; but to protect state...
  function getState() {
    return { ...state };
  }
  return { getState, dispatch };
}
