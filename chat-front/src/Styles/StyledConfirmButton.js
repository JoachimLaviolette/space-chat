import styled from "styled-components";
import { DefaultStyle, StyledButton } from ".";

const StyledConfirmButton = styled(StyledButton)`
  background: ${(props) =>
    props.enabled ? DefaultStyle.COLOR.SUCCESS : DefaultStyle.COLOR.DISABLED};
  color: ${(props) =>
    props.enabled
      ? DefaultStyle.COLOR.LIGHT
      : DefaultStyle.COLOR.DARK_DISABLED};
  font-weight: ${(props) => (props.enabled ? "bold" : "normal")};
  text-shadow: ${(props) =>
    props.enabled
      ? "-1px 1px 3px " + DefaultStyle.COLOR.DARK_SUCCESS
      : "0px 0px 0px"};
  box-shadow: 0px 0px 0px
    ${(props) => (props.enabled ? DefaultStyle.COLOR.DARK_SUCCESS : "")};
`;

export default StyledConfirmButton;
