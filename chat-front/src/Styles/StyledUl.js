import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
    flex-direction: row;
  }
`;

export default StyledUl;
