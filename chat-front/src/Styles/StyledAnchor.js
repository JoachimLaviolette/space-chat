import styled from "styled-components";
import { DefaultStyle } from "./DefaultStyle";

const StyledAnchor = styled.a`
  cursor: pointer;
  color: ${(props) => props.color || DefaultStyle.COLOR.WHITE};
  text-align: ${(props) => props.textAlign || ""};
  text-decoration: none;
  transition: ${(props) => props.transition || ""};

  &:hover {
    color: ${(props) => (props.hoverable ? DefaultStyle.COLOR.SECONDARY : "")};
    transition: ${(props) => props.transition || ""};
  }
`;

export default StyledAnchor;
