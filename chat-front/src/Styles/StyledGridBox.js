import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledGridBox = styled.div`
  display: grid;
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  grid-row-gap: ${(props) => props.gridRowGap || "1rem"};
  grid-column-gap: ${(props) => props.gridColumnGap || "1rem"};
  grid-template-columns: ${(props) =>
    props.forceTemplateOnMobile ? props.gridTemplateColumns || "auto" : "auto"};
  grid-template-rows: ${(props) =>
    props.forceTemplateOnMobile ? props.gridTemplateRows || "auto" : "auto"};
  background-color: ${(props) => props.backgroundColor || ""};
  text-align: center;
  border: ${(props) => props.border || "none"};
  border-style: ${(props) => props.borderStyle || "none"};

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    grid-row-gap: ${(props) => props.gridRowGap || 0};
    grid-column-gap: ${(props) => props.gridColumnGap || 0};
    grid-template-columns: ${(props) =>
      props.gridTemplateColumns || "auto auto"};
    text-align: ${(props) => props.textAlign || ""};
  }
`;

export default StyledGridBox;
