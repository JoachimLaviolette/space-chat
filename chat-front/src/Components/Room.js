import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { StyledRoom } from "../Styles";
import { updateRoom } from "../Redux/Actions";

class Room extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.setupServer();
  }

  /**
   * Tirggered when the user selects a room
   */
  handleClick = () => {
    if (
      !this.props.room ||
      (this.props.room !== undefined && this.props.room !== this.props.roomId)
    )
      this.props.socket.emit("updateRoom", this.props.roomId);
  };

  /**
   * Setup the real time server
   */
  setupServer = () => {
    this.props.socket.on("updateRoom", (roomId) =>
      this.props.updateRoom(roomId)
    );
  };

  render = () => (
    <StyledRoom
      onClick={this.handleClick}
      active={this.props.room ? this.props.room === this.props.roomId : false}
    >
      {this.props.roomId}
    </StyledRoom>
  );
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = {
  updateRoom: updateRoom,
};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
