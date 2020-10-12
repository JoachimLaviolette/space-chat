import { ActionType } from "./Types";

export const login = (user) => ({
  type: ActionType.LOGIN,
  payload: user,
});

export const loginSuccess = (user) => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = () => ({
  type: ActionType.LOGIN_FAILURE,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});
