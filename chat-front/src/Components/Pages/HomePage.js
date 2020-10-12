import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { Page } from "../";
import {
  StyledH3,
  StyledInput,
  StyledConfirmButton,
  StyledFlexBox,
} from "../../Styles";
import { Themes, URLS } from "../../Utils";
import { ActionType, login } from "../../Redux/Actions";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: Themes.LIGHT,
      params: {
        [Themes.LIGHT]: { backgroundColor: Themes.DARK },
        [Themes.DARK]: { backgroundColor: Themes.LIGHT },
      },
      pseudo: props.user ? props.user.pseudo : "",
    };
    this.socket = io.connect("http://localhost:5000");
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange = () =>
    this.setState({ pseudo: document.getElementById("pseudo").value.trim() });

  handleLogin = () => {
    if (this.state.pseudo.trim().length === 0) return;

    this.props.login({
      pseudo: this.state.pseudo,
    });
    this.socket.emit("registerUser", this.state.pseudo);
  };

  componentDidUpdate() {
    if (this.props.action === ActionType.LOGIN_SUCCESS) {
      window.location = URLS.CHAT_PAGE;
      this.setState({
        pseudo: "",
      });
    }
  }

  render = () => (
    <Page backgroundColor={this.state.params[this.state.theme].backgroundColor}>
      <StyledFlexBox margin={"auto"} padding={"0 2rem"}>
        <StyledH3
          theme={this.state.theme}
          padding={"0 0 2rem 0"}
          textAlign={"center"}
        >
          {"Welcome to Space'Chat!"}
        </StyledH3>
        <StyledFlexBox padding={"0 5rem"}>
          <StyledInput
            value={this.state.pseudo}
            id={"pseudo"}
            placeholder={"Your pseudo here"}
            onChange={this.handleChange}
          />
          <StyledConfirmButton
            margin={"1rem 0"}
            onClick={this.handleLogin}
            enabled={this.state.pseudo.trim().length != 0}
          >
            {"LOG IN"}
          </StyledConfirmButton>
        </StyledFlexBox>
      </StyledFlexBox>
    </Page>
  );
}

function mapStateToProps(state) {
  return { ...state, currentPath: URLS.HOME_PAGE };
}

const mapDispatchToProps = {
  login: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
