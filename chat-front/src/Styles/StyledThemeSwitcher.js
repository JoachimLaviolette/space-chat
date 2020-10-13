import styled from "styled-components";
import { DefaultStyle } from ".";
import { Themes } from "../Utils";

const StyledThemeSwitcher = styled.div`
  font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  font-weight: bold;
  cursor: pointer;
  margin: ${(props) => props.margin || "auto"};
  width: 15rem;
  padding: 0.7rem;
  border-radius: 2rem;
  text-align: center;
  transition: 0.2s ease;
  background-color: ${(props) =>
    props.theme === Themes.DARK
      ? DefaultStyle.COLOR.THEME_SWITCHER_LIGHT
      : DefaultStyle.COLOR.THEME_SWITCHER_DARK};
  color: ${(props) =>
    props.theme === Themes.DARK
      ? DefaultStyle.COLOR.THEME_SWITCHER_DARK
      : DefaultStyle.COLOR.THEME_SWITCHER_LIGHT};
  text-shadow: "-1px 1px 3px " +
    ${(props) =>
      props.theme === Themes.DARK
        ? DefaultStyle.COLOR.THEME_SWITCHER_LIGHT
        : DefaultStyle.COLOR.THEME_SWITCHER_DARK};
  box-shadow: "-1px 1px 3px " +
    ${(props) =>
      props.theme === Themes.DARK
        ? DefaultStyle.COLOR.THEME_SWITCHER_DARK
        : DefaultStyle.COLOR.THEME_SWITCHER_LIGHT};

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease;
  }

  &:focus {
    outline-width: 0;
  }

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.VERY_SMALL};
    padding: 0.5rem;
    width: 9rem;
  }
`;

export default StyledThemeSwitcher;
