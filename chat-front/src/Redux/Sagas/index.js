import { takeLatest, all } from "redux-saga/effects";
import { ActionType } from "../Actions";
import { login, logout } from "./User";
import { updateTheme } from "./Theme";

function* actionWatcher() {
  yield takeLatest(ActionType.LOGIN, login);
  yield takeLatest(ActionType.LOGOUT, logout);
  yield takeLatest(ActionType.UPDATE_THEME, updateTheme);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
