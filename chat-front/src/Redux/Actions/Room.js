import { ActionType } from "./Types";

export const updateRoom = (roomId) => ({
  type: ActionType.UPDATE_ROOM,
  payload: roomId,
});

export const updateRoomSuccess = (roomId) => ({
  type: ActionType.UPDATE_ROOM_SUCCESS,
  payload: roomId,
});

export const updateRoomFailure = () => ({
  type: ActionType.UPDATE_ROOM_FAILURE,
});

export const updateRooms = (rooms) => ({
  type: ActionType.UPDATE_ROOMS,
  payload: rooms,
});

export const updateRoomsSuccess = (rooms) => ({
  type: ActionType.UPDATE_ROOMS_SUCCESS,
  payload: rooms,
});

export const updateRoomsFailure = () => ({
  type: ActionType.UPDATE_ROOMS_FAILURE,
});
