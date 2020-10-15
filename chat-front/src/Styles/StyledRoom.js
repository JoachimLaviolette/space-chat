import styled from "styled-components";
import { DefaultStyle } from ".";

const StyledRoom = styled.div`
  cursor: ${(props) => (props.active ? "" : "pointer")};
  font-size: ${DefaultStyle.FONT_SIZE.MEDIUM};
  font-weight: bold;
  margin: 0;
  width: ${(props) => props.mobileWidth || ""};
  padding: 1rem;
  border-radius: ${(props) => props.borderRadius || "0.3rem"};
  border: none;
  transition: 0.2s ease;
  background-color: ${(props) =>
    props.active
      ? DefaultStyle.COLOR.ROOM_ACTIVE
      : DefaultStyle.COLOR.ROOM_REGULAR};
  color: ${DefaultStyle.COLOR.LIGHT};
  text-shadow: -1px 1px 3px ${DefaultStyle.COLOR.ROOM_SHADOW};

  &:hover {
    opacity: ${(props) => (props.active ? 1 : 0.8)};
    transition: 0.1s ease;
  }

  &:focus {
    outline-width: 0;
  }

  @media ${DefaultStyle.MIN_DEVICE.TABLET} {
    font-size: ${DefaultStyle.FONT_SIZE.SMALL};
    width: ${(props) => props.width || ""};
    padding: 0.4rem;
  }
`;

export default StyledRoom;
