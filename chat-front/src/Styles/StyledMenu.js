import styled from "styled-components";
import { DefaultStyle, StyledFlexBox } from ".";
import { Themes } from "../Utils";

const StyledMenu = styled(StyledFlexBox)`
  display: ${(props) => props.display || "none"};
  background-color: ${(props) =>
    props.theme == Themes.LIGHT
      ? DefaultStyle.COLOR.LIGHT
      : DefaultStyle.COLOR.DARK};
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 10rem 0;

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    margin: 0 0 0 30rem;
    display: initial;
    align-items: center;
    position: initial;
    padding: 0;
  }
`;

export default StyledMenu;
