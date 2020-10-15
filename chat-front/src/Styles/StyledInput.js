import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledInput = styled.input`
  font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  font-weight: normal;
  padding: 1rem;
  width: ${(props) => props.width || ""};
  border: none;
  background: ${(props) => props.backgroundColor};
  border-radius: 0.5rem;
  text-align: ${(props) => props.textAlign || "center"};
  color: ${DefaultStyle.COLOR.PRIMARY};

  &:focus {
    font-weight: bold;
    outline-width: 0;
  }

  &::placeholder {
    color: ${DefaultStyle.COLOR.PRIMARY};
  }

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.SMALL};
    padding: 0.5rem;
  }
`;

export default StyledInput;
