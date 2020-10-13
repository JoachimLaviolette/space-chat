import { put } from "redux-saga/effects";
import { updateThemeSuccess, updateThemeFailure } from "../Actions";

export function* updateTheme(action) {
  try {
    localStorage.setItem("theme", action.payload);
    yield put(updateThemeSuccess(action.payload));
  } catch (error) {
    yield put(updateThemeFailure());
  }
}
