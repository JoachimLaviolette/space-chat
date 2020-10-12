import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledFlexBox = styled.div`
  display: ${(props) => props.display || "flex"};
  z-index: ${(props) => props.zIndex || ""};
  position: ${(props) => props.position || "initial"};
  top: ${(props) => props.top || ""};
  right: ${(props) => props.right || ""};
  left: ${(props) => props.left || ""};
  bottom: ${(props) => props.bottom || ""};
  font-size: ${(props) => props.fontSize || DefaultStyle.FONT_SIZE.SMALL};
  margin: ${(props) => props.mobileMargin || props.margin || ""};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  max-width: ${(props) => props.maxWidth || "none"};
  max-height: ${(props) => props.maxHeight || "none"};
  padding: ${(props) => props.padding || ""};
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || ""};
  align-items: ${(props) => props.alignItems || ""};
  flex-grow: ${(props) => props.flexGrow || "0"};
  background-color: ${(props) => props.backgroundColor || ""};
  opacity: ${(props) => props.opacity || "1"};
  box-shadow: ${(props) => props.boxShadow || ""};
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.textAlign || ""};
  text-shadow: ${(props) => props.textShadow || ""};
  cursor: ${(props) => props.cursor || ""};
  border: ${(props) => props.border || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  border-style: ${(props) => props.borderStyle || ""};
  background-image: ${(props) =>
    props.backgroundImage
      ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${props.backgroundImage})`
      : ""};
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: ${(props) => props.overflowY || "hidden"};
  overflow-x: ${(props) => props.overflowX || "hidden"};

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    margin: ${(props) => props.margin || ""};
  }
`;

export default StyledFlexBox;
