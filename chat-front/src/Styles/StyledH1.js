import styled from "styled-components";
import { Themes } from "../Utils";
import { DefaultStyle } from "./DefaultStyle";

const StyledH1 = styled.p`
  display: ${(props) => props.display || ""};
  font-size: ${DefaultStyle.FONT_SIZE.HUGE};
  font-weight: bold;
  font-style: normal;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  color: ${(props) =>
    props.color ||
    (props.theme === Themes.LIGHT
      ? DefaultStyle.COLOR.DARK
      : DefaultStyle.COLOR.LIGHT)};
  text-align: ${(props) => props.textAlign || ""};

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
  }
`;

export default StyledH1;
