import { combineReducers, createStore } from "@reduxjs/toolkit";
import formReducer from "./reducer/formSlice";
// assume that the counter slice will be combined with other slices
const reducer = combineReducers({
  form: formReducer
});

const store = createStore(reducer);
export default store;
// typescript type for the combined state
export type State = ReturnType<typeof reducer>;