import { put } from "redux-saga/effects";
import {
  updateRoomSuccess,
  updateRoomFailure,
  updateRoomsSuccess,
  updateRoomsFailure,
} from "../Actions";

export function* updateRoom(action) {
  try {
    // localStorage.setItem("room", action.payload);
    yield put(updateRoomSuccess(action.payload));
  } catch (error) {
    yield put(updateRoomFailure());
  }
}

export function* updateRooms(action) {
  try {
    // localStorage.setItem("rooms", action.payload);
    yield put(updateRoomsSuccess(action.payload));
  } catch (error) {
    yield put(updateRoomsFailure());
  }
}
