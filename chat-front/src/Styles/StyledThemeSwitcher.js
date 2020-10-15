import styled from "styled-components";
import { DefaultStyle } from ".";
import { Themes } from "../Utils";

const StyledThemeSwitcher = styled.div`
  font-size: ${DefaultStyle.FONT_SIZE.BIGGER};
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  border-radius: 2rem;
  transition: 0.2s ease;
  color: ${(props) =>
    props.theme === Themes.DARK
      ? DefaultStyle.COLOR.THEME_SWITCHER_LIGHT
      : DefaultStyle.COLOR.THEME_SWITCHER_DARK};
  text-shadow: "-1px 1px 3px " +
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
    font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  }
`;

export default StyledThemeSwitcher;
