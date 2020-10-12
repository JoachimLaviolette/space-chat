export function* updateTheme(action) {
  localStorage.setItem(
    "theme",
    JSON.stringify({
      theme: action.payload.theme,
    })
  );
}
