import styled from "styled-components";
import { DefaultStyle } from "./DefaultStyle";

const StyledParagraph = styled.p`
  display: ${(props) => props.display || ""};
  width: ${(props) => props.width || ""};
  font-size: ${(props) => props.fontSize || DefaultStyle.FONT_SIZE.BIG};
  font-weight: ${(props) => props.fontWeight || ""};
  font-style: ${(props) => props.fontStyle || ""};
  text-align: ${(props) => props.textAlign || ""};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  color: ${(props) => props.color || ""};
  border: ${(props) => props.border || "none"};
  border-style: ${(props) => props.borderStyle || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  text-shadow: ${(props) => props.textShadow || ""};
  text-align: ${(props) => props.textAlign || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  background-color: ${(props) => props.backgroundColor || ""};

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${(props) => props.fontSize || DefaultStyle.FONT_SIZE.SMALL};
  }
`;

export default StyledParagraph;
