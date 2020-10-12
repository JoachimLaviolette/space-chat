import styled from "styled-components";
import { DefaultStyle, StyledH1 } from ".";

const StyledH4 = styled(StyledH1)`
  font-size: ${DefaultStyle.FONT_SIZE.BIG};
  font-weight: normal;

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  }
`;

export default StyledH4;
