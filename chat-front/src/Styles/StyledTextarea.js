import styled from "styled-components";
import { DefaultStyle } from "./DefaultStyle";

const StyledLi = styled.textarea`
  font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  padding: 1rem;
  margin: ${(props) => props.margin || ""};
  width: ${(props) => props.width || ""};
  border-radius: 0.12em;
  color: ${DefaultStyle.COLOR.GRAY};
  resize: none;

  &:focus {
    outline-width: 0;
  }

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.SMALL};
  }
`;

export default StyledLi;
