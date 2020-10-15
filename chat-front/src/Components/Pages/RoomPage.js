import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Page, Rooms } from "../";
import {
  StyledH3,
  StyledInput,
  StyledConfirmButton,
  StyledFlexBox,
  StyledGridBox,
  DefaultStyle,
} from "../../Styles";
import { Themes, URLS } from "../../Utils";
import { ActionType, updateRoom, updateRooms } from "../../Redux/Actions";

class RoomPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        [Themes.LIGHT]: {
          backgroundColor: DefaultStyle.COLOR.LIGHT,
          textColor: DefaultStyle.COLOR.DARK,
          inputBackgroundColor: DefaultStyle.COLOR.TERTIARY,
        },
        [Themes.DARK]: {
          backgroundColor: DefaultStyle.COLOR.DARK,
          textColor: DefaultStyle.COLOR.LIGHT,
          inputBackgroundColor: DefaultStyle.COLOR.ORIGIN,
        },
      },
      roomId: "",
      redirect: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.setupServer();
  }

  componentDidMount() {
    this.props.socket.emit("fetchRooms");
  }

  /**
   * Handle room ID input changes
   */
  handleChange = () =>
    this.setState({ roomId: document.getElementById("roomId").value });

  /**
   * Triggered when create room button is clicked
   */
  handleCreate = () => {
    if (this.state.roomId.trim().length === 0) return;
    this.props.socket.emit("createRoom", this.state.roomId);
  };

  /**
   * Setup the real time server
   */
  setupServer = () => {
    this.props.socket.on("updateRoom", (roomId) =>
      this.props.updateRoom(roomId)
    );
    this.props.socket.on("fetchRooms", (rooms) =>
      this.props.updateRooms(rooms)
    );
  };

  componentDidUpdate() {
    // Redirect the user only after the login process has ended
    if (this.props.action === ActionType.UPDATE_ROOM_SUCCESS) {
      this.setState({
        roomId: "",
        redirect: <Redirect push to={URLS.CHAT_PAGE} />,
      });
    }
  }

  render = () => {
    if (this.state.redirect) return this.state.redirect;

    return (
      <Page
        backgroundColor={this.state.params[this.props.theme].backgroundColor}
      >
        <StyledFlexBox
          color={this.state.params[this.props.theme].textColor}
          margin={"auto"}
          padding={"0 2rem"}
        >
          <StyledGridBox>
            <StyledFlexBox padding={"0 5rem"}>
              <StyledH3
                theme={this.props.theme}
                padding={"0 0 2rem 0"}
                textAlign={"center"}
              >
                {"Create a room..."}
              </StyledH3>
              <StyledInput
                id={"roomId"}
                autoComplete={"off"}
                value={this.state.roomId}
                placeholder={"Choose a room ID"}
                backgroundColor={
                  this.state.params[this.props.theme].inputBackgroundColor
                }
                onChange={this.handleChange}
              />
              <StyledConfirmButton
                margin={"1rem 0"}
                onClick={this.handleCreate}
                enabled={this.state.roomId.trim().length !== 0}
              >
                {"CREATE ROOM"}
              </StyledConfirmButton>
            </StyledFlexBox>
            <StyledFlexBox padding={"0 5rem"}>
              <StyledH3
                theme={this.props.theme}
                padding={"0 0 2rem 0"}
                textAlign={"center"}
              >
                {"...or join one!"}
              </StyledH3>
              <Rooms rooms={this.props.rooms} />
            </StyledFlexBox>
          </StyledGridBox>
        </StyledFlexBox>
      </Page>
    );
  };
}
const mapStateToProps = (state) => ({ ...state, currentPath: URLS.ROOM_PAGE });
const mapDispatchToProps = {
  updateRoom,
  updateRooms,
};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
