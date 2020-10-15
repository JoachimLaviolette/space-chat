import { ActionType } from "../Actions";
import { Themes, URLS } from "../../Utils";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
const currentTime = new Date().getHours();
let user = localStorage.getItem("user");
user = user ? JSON.parse(user) : undefined;
const theme =
  localStorage.getItem("theme") ??
  (currentTime > 18 || currentTime < 7 ? Themes.DARK : Themes.LIGHT);
const room = undefined; // stores the room's id
const rooms = []; // stores the room's id
const initialState = {
  socket,
  user,
  room,
  rooms,
  theme,
  currentPath: URLS.HOME_PAGE,
};

const reducer = (state = initialState, action) => {
  state.action = action.type;
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.LOGIN_FAILURE:
    case ActionType.LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    case ActionType.UPDATE_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    case ActionType.UPDATE_ROOM_SUCCESS:
      return {
        ...state,
        room: action.payload,
      };
    case ActionType.UPDATE_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
