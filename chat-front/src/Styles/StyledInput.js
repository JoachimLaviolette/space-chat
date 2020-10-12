import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledInput = styled.input`
  font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  padding: 1rem;
  width: ${(props) => props.width || ""};
  border: none;
  background: ${DefaultStyle.COLOR.LIGHT_GRAY};
  border-radius: 0.5rem;
  text-align: ${(props) => props.textAlign || "center"};
  color: ${DefaultStyle.COLOR.GRAY};

  &:focus {
    outline-width: 0;
    background: ${DefaultStyle.COLOR.TERTIARY};
    color: ${DefaultStyle.COLOR.PRIMARY};

    &::placeholder {
      color: ${DefaultStyle.COLOR.PRIMARY};
    }
  }

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.SMALL};
    padding: 0.5rem;
  }
`;

export default StyledInput;
