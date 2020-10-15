import React from "react";
import { Room } from ".";
import { DefaultStyle, StyledGridBox } from "../Styles";

const Rooms = (props) => {
  return (
    <StyledGridBox
      margin={props.margin}
      gridTemplateColumns={"auto auto auto auto auto auto"}
      gridColumnGap={"1rem"}
      gridRowGap={"1rem"}
      border={`1px solid ${DefaultStyle.COLOR.WHITE}`}
    >
      {props.rooms.map((room) => (
        <Room roomId={room.roomId} />
      ))}
    </StyledGridBox>
  );
};

export default Rooms;
