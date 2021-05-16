import { createAction } from "@reduxjs/toolkit";

export const fetchExercisRequest = createAction("exercises/fetchExercisRequest");
export const fetchExercisSuccess = createAction("exercises/fetchExercisSuccess");
export const fetchExercisError = createAction("exercises/fetchExercisError");

export const changeFilter = createAction("exercises/Change_Filter");