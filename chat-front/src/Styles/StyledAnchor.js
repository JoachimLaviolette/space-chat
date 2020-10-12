import styled from "styled-components";
import { DefaultStyle } from "./DefaultStyle";

const StyledAnchor = styled.a`
  cursor: pointer;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.textAlign || ""};
  text-decoration: none;
  transition: ${(props) => props.transition || ""};
  &:hover {
    color: ${(props) => (props.hoverable ? DefaultStyle.COLOR.PRIMARY : "")};
    transition: ${(props) => props.transition || ""};
  }
`;

export default StyledAnchor;
