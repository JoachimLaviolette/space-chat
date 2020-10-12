import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledSpan = styled.span`
  display: ${(props) => props.display || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
  text-align: ${(props) => props.textAlign};
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
  }
`;

export default StyledSpan;
