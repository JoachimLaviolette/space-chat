import styled from "styled-components";
import { DefaultStyle, StyledH1 } from ".";

const StyledH3 = styled(StyledH1)`
  font-size: ${DefaultStyle.FONT_SIZE.BIGGER};

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.BIG};
  }
`;

export default StyledH3;
