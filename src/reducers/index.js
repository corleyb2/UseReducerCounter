import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  INCREMENT_BY_N,
  DECREMENT_BY_N,
  ALLOW_INCREMENT_BY_N,
} from "../actions";

const incrementers = (state = { counter: 0, n: 0 }, action) => {
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
    default:
      return state;
  }
};

const allowable = (state = { allowed: true }, action) => {
  switch (action.type) {
    case ALLOW_INCREMENT_BY_N:
      return { ...state, allowed: !state.allowed };
    default:
      return state;
  }
};

export function reducer(state = {}, action) {
  return {
    incrementers: incrementers(state.incrementers, action),
    allowable: allowable(state.allowable, action),
  };
}
