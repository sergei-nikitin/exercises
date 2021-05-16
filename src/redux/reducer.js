import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    fetchExercisSuccess,
  changeFilter,
} from "./actions";

const exercises = createReducer([], {
  [fetchExercisSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
    // state.filter(({ id }) => id !== payload),
//   [patchContactSuccess]: (state, { payload }) => [...state, payload],
});

const filter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
//   [deleteContactSuccess]: (state, action) => (action.payload = ""),
});

export default combineReducers({
  exercises,
  filter,
});