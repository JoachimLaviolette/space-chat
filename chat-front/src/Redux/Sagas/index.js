import { takeLatest, all } from "redux-saga/effects";
import { ActionType } from "../Actions";
import { login, logout } from "./User";
import { updateTheme } from "./Theme";
import { updateRoom, updateRooms } from "./Room";

function* actionWatcher() {
  yield takeLatest(ActionType.LOGIN, login);
  yield takeLatest(ActionType.LOGOUT, logout);
  yield takeLatest(ActionType.UPDATE_THEME, updateTheme);
  yield takeLatest(ActionType.UPDATE_ROOM, updateRoom);
  yield takeLatest(ActionType.UPDATE_ROOMS, updateRooms);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
