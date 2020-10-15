import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Page, Rooms } from "..";
import {
  StyledAnchor,
  StyledFlexBox,
  StyledGridBox,
  StyledInput,
  StyledSpan,
  StyledButton,
  StyledParagraph,
  StyledH3,
  DefaultStyle,
} from "../../Styles";
import { Themes, URLS } from "../../Utils";
import { ActionType, updateRooms } from "../../Redux/Actions";

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        [Themes.LIGHT]: {
          backgroundColor: DefaultStyle.COLOR.LIGHT,
          textColor: DefaultStyle.COLOR.DARK,
          chatBackgroundColor: DefaultStyle.COLOR.TERTIARY,
          chatTextColor: DefaultStyle.COLOR.PRIMARY,
          chatBackgroundShadow: `-1px 1px 5px ${DefaultStyle.COLOR.TERTIARY}`,
          inputBackgroundColor: DefaultStyle.COLOR.TERTIARY,
        },
        [Themes.DARK]: {
          backgroundColor: DefaultStyle.COLOR.DARK,
          textColor: DefaultStyle.COLOR.LIGHT,
          chatBackgroundColor: DefaultStyle.COLOR.ORIGIN,
          chatTextColor: DefaultStyle.COLOR.PRIMARY,
          chatBackgroundShadow: `-1px 1px 5px ${DefaultStyle.COLOR.BLACK}`,
          inputBackgroundColor: DefaultStyle.COLOR.ORIGIN,
        },
      },
      content: [],
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.setupServer();
  }

  componentDidMount() {
    this.props.socket.emit("fetchRooms");
    if (this.props.room) this.props.socket.emit("fetchRoom", this.props.room);
  }

  componentDidUpdate() {
    if (this.props.action !== ActionType.UPDATE_ROOM_SUCCESS) return;
    if (this.props.room) this.props.socket.emit("fetchRoom", this.props.room);
  }

  /**
   * Handle message input changes
   */
  handleChange = () => {
    this.setState({ message: document.querySelector("#message").value });
  };

  /**
   * Triggered when send button is clicked
   */
  handleSending = () => {
    this.props.socket.emit(
      "updateChat",
      {
        pseudo: this.props.user.pseudo,
        content: document.querySelector("#message").value.trim(),
        time: new Date().toLocaleTimeString(),
      },
      this.props.room
    );
    this.setState({ message: "" });
  };

  /**
   * Setup the real time server
   */
  setupServer = () => {
    this.props.socket.on("updateChat", (chatContent) =>
      this.updateChat(chatContent)
    );
    this.props.socket.on("fetchRoom", (room) =>
      this.updateChat(room.history.chat)
    );
    this.props.socket.on("fetchRooms", (rooms) =>
      this.props.updateRooms(rooms)
    );
  };

  /**
   * Called when the server sends back the event "updateChat"
   * @param {Array} chatContent The chat content
   */
  updateChat = (chatContent) => {
    this.setState({
      content: chatContent,
    });
    const contentContainer = document.querySelector("#content");
    if (!contentContainer) return;
    contentContainer.scrollTop = contentContainer.scrollHeight;
  };

  render = () => (
    <Page backgroundColor={this.state.params[this.props.theme].backgroundColor}>
      <StyledFlexBox
        color={this.state.params[this.props.theme].textColor}
        margin={"auto 25%"}
        mobileMargin={"auto 2rem"}
        padding={"2rem"}
      >
        <Rooms margin={"0 0 3rem 0"} rooms={this.props.rooms} />
        <StyledH3
          theme={this.props.theme}
          padding={"0 0 2rem 0"}
          textAlign={"center"}
        >
          {"Space'Chat!"}
        </StyledH3>
        <StyledFlexBox
          id={"content"}
          overflowY={"scroll"}
          height={"20rem"}
          padding={"1rem"}
          margin={"0 0 1rem 0"}
          backgroundColor={
            this.state.params[this.props.theme].chatBackgroundColor
          }
          borderRadius={"0.5rem"}
          boxShadow={this.state.params[this.props.theme].chatBackgroundShadow}
        >
          {this.state.content.map((message) => {
            return (
              <StyledParagraph
                fontSize={DefaultStyle.FONT_SIZE.SMALL}
                margin={"0 0 0.5rem 0"}
                textAlign={`${
                  message.pseudo === this.props.user.pseudo ? "right" : "left"
                }`}
              >
                <StyledSpan
                  fontWeight={"bold"}
                  color={this.state.params[this.props.theme].chatTextColor}
                >
                  {message.pseudo}
                </StyledSpan>{" "}
                <StyledSpan
                  color={this.state.params[this.props.theme].chatTextColor}
                >
                  {" ("}
                  {message.time}
                  {") "}
                </StyledSpan>
                <StyledParagraph
                  padding={"0.2rem 0"}
                  color={this.state.params[this.props.theme].chatTextColor}
                  fontSize={DefaultStyle.FONT_SIZE.VERY_SMALL}
                >
                  {message.content}
                </StyledParagraph>
              </StyledParagraph>
            );
          })}
        </StyledFlexBox>
        <StyledGridBox gridTemplateColumns={"84% 15%"} gridColumnGap={"1%"}>
          <StyledInput
            id={"message"}
            textAlign={"left"}
            value={this.state.message}
            placeholder={"Your message here"}
            backgroundColor={
              this.state.params[this.props.theme].inputBackgroundColor
            }
            onChange={this.handleChange}
          />
          <StyledButton
            onClick={this.handleSending}
            enabled={this.state.message.trim().length !== 0}
          >
            <i className="fas fa-paper-plane"></i>
          </StyledButton>
        </StyledGridBox>
        <StyledButton
          margin={"3rem auto 0 auto"}
          width={"11rem"}
          mobileWidth={"15rem"}
          enabled={true}
        >
          <StyledAnchor
            as={Link}
            to={URLS.DOCS_PAGE}
            color={DefaultStyle.COLOR.WHITE}
          >
            <StyledSpan margin={"0 0.5rem 0 0"}>
              <i className="fas fa-arrow-alt-circle-right"></i>{" "}
            </StyledSpan>
            {"Space'Docs"}
          </StyledAnchor>
        </StyledButton>
      </StyledFlexBox>
    </Page>
  );
}
const mapStateToProps = (state) => ({ ...state, currentPath: URLS.CHAT_PAGE });
const mapDispatchToProps = {
  updateRooms,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
