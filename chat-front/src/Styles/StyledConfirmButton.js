import styled from "styled-components";
import { DefaultStyle, StyledButton } from ".";

const StyledConfirmButton = styled(StyledButton)`
  color: ${(props) =>
    props.enabled
      ? DefaultStyle.COLOR.LIGHT
      : DefaultStyle.COLOR.DARK_DISABLED};
  font-weight: ${(props) => (props.enabled ? "bold" : "normal")};
`;

export default StyledConfirmButton;
