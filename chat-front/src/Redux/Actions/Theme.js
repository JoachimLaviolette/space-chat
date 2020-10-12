import { ActionType } from "./Types";

export const updateTheme = (data) => ({
  type: ActionType.UPDATE_THEME,
  payload: data,
});
