import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledButton = styled.button`
  font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};
  margin: ${(props) => props.margin || ""};
  width: ${(props) => props.mobileWidth || ""};
  padding: 1rem;
  border-radius: 2rem;
  border: none;
  text-shadow: ${"-1px 1px 3px " + DefaultStyle.COLOR.DARK_SECONDARY};
  transition: 0.2s ease;
  background: ${(props) =>
    props.enabled ? DefaultStyle.COLOR.SECONDARY : DefaultStyle.COLOR.DISABLED};
  color: ${(props) =>
    props.enabled
      ? DefaultStyle.COLOR.LIGHT
      : DefaultStyle.COLOR.DARK_DISABLED};
  font-weight: ${(props) => (props.enabled ? "bold" : "normal")};
  text-shadow: ${(props) =>
    props.enabled
      ? "-1px 1px 3px " + DefaultStyle.COLOR.DARK_SECONDARY
      : "0px 0px 0px"};
  box-shadow: 0px 0px 0px
    ${(props) => (props.enabled ? DefaultStyle.COLOR.DARK_SECONDARY : "")};

  &:hover {
    opacity: ${(props) => (props.enabled ? 0.8 : 1)};
    transition: 0.2s ease;
  }

  &:focus {
    outline-width: 0;
  }

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.SMALLER};
    width: ${(props) => props.width || ""};
    padding: 0.5rem;
  }
`;

export default StyledButton;
