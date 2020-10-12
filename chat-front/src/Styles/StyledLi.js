import styled from "styled-components";
import { DefaultStyle } from "./DefaultStyle";

const StyledLi = styled.li`
  padding: 3rem;
  font-size: ${DefaultStyle.FONT_SIZE.HUGE};
  font-weight: bold;
  color: ${(props) => props.color};
  transition: ${(props) => props.transition || ""};
  &:hover {
    color: ${DefaultStyle.COLOR.SECONDARY};
  }

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.SMALL};
    padding: 1rem;
  }
`;

export default StyledLi;
