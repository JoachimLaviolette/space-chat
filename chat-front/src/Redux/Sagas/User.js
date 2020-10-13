import { put } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "../Actions";

export function* login(action) {
  try {
    localStorage.setItem("user", JSON.stringify(action.payload));
    yield put(loginSuccess(action.payload));
  } catch (error) {
    localStorage.setItem("user", undefined);
    yield put(loginFailure());
  }
}

export function* logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("theme");
  yield null;
}
