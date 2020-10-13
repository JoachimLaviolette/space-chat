import { ActionType } from "./Types";

export const updateTheme = (theme) => ({
  type: ActionType.UPDATE_THEME,
  payload: theme,
});

export const updateThemeSuccess = (theme) => ({
  type: ActionType.UPDATE_THEME_SUCCESS,
  payload: theme,
});

export const updateThemeFailure = (theme) => ({
  type: ActionType.UPDATE_THEME_FAILURE,
});
