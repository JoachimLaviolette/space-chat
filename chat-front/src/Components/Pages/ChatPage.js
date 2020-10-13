import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { Link, Page } from "..";
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

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: Themes.LIGHT,
      params: {
        [Themes.LIGHT]: { backgroundColor: Themes.DARK },
        [Themes.DARK]: { backgroundColor: Themes.LIGHT },
      },
      content: [],
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.setupServer();
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
    this.socket.emit("updateChat", {
      pseudo: this.props.user.pseudo,
      content: document.querySelector("#message").value.trim(),
      time: new Date().toLocaleTimeString(),
    });
    this.setState({ message: "" });
  };

  /**
   * Setup the real time server
   */
  setupServer = () => {
    this.socket = io.connect("http://localhost:5000");
    this.socket.on("updateChat", (chatContent) => this.updateChat(chatContent));
  };

  /**
   * Called when the server sends back the event "updateChat"
   * @param {string} chatContent The updated chat content to now display
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
    <Page backgroundColor={this.state.params[this.state.theme].backgroundColor}>
      <StyledFlexBox
        margin={"auto 25%"}
        mobileMargin={"auto 2rem"}
        padding={"2rem"}
      >
        <StyledH3
          theme={this.state.theme}
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
          backgroundColor={DefaultStyle.COLOR.VERY_LIGHT_GRAY}
          borderRadius={"0.5rem"}
          boxShadow={`-1px 1px 5px ${DefaultStyle.COLOR.MEDIUM_GRAY}`}
        >
          {this.state.content.map((message) => {
            return (
              <StyledParagraph
                textShadow={`-1px 1px 3px ${DefaultStyle.COLOR.MEDIUM_GRAY}`}
                fontSize={DefaultStyle.FONT_SIZE.SMALL}
                margin={"0 0 0.5rem 0"}
              >
                <StyledSpan
                  fontWeight={"bold"}
                  color={DefaultStyle.COLOR.DARK_GRAY}
                >
                  {message.pseudo}
                </StyledSpan>{" "}
                <StyledSpan color={DefaultStyle.COLOR.DARK_GRAY}>
                  {" ("}
                  {message.time}
                  {") "}
                </StyledSpan>
                <StyledParagraph
                  padding={"0.2rem 0"}
                  color={DefaultStyle.COLOR.GRAY}
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
            onChange={this.handleChange}
          />
          <StyledButton
            onClick={this.handleSending}
            enabled={this.state.message.trim().length != 0}
          >
            <i class="fas fa-paper-plane"></i>
          </StyledButton>
        </StyledGridBox>
        <StyledAnchor as={Link} to={URLS.DOCS_PAGE}>
          <StyledButton
            margin={"3rem auto 0 auto"}
            width={"11rem"}
            mobileWidth={"15rem"}
            enabled={true}
          >
            <StyledSpan margin={"0 0.5rem 0 0"}>
              <i class="fas fa-arrow-alt-circle-right"></i>{" "}
            </StyledSpan>
            {"Space'Docs"}
          </StyledButton>
        </StyledAnchor>
      </StyledFlexBox>
    </Page>
  );
}

function mapStateToProps(state) {
  return { ...state, currentPath: URLS.CHAT_PAGE };
}

export default connect(mapStateToProps, null)(ChatPage);
