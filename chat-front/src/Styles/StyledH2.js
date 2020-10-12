import styled from "styled-components";
import { DefaultStyle, StyledH1 } from ".";

const StyledH2 = styled(StyledH1)`
  font-size: ${DefaultStyle.FONT_SIZE.HUGE};

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.BIGGER};
  }
`;

export default StyledH2;
