import React, { Component } from "react";
import { connect } from "react-redux";
import { DefaultStyle, StyledThemeSwitcher, StyledSpan } from "../Styles";
import { Themes } from "../Utils";
import { updateTheme } from "../Redux/Actions";

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        [Themes.LIGHT]: {
          backgroundColor: DefaultStyle.COLOR.DARK_SECONDARY,
          textColor: DefaultStyle.COLOR.WHITE,
          iconClass: "far fa-moon",
          text: "DARK",
        },
        [Themes.DARK]: {
          backgroundColor: DefaultStyle.COLOR.LIGHT,
          textColor: DefaultStyle.COLOR.THEME_SWITCHER_DARK,
          iconClass: "fas fa-sun",
          text: "LIGHT",
        },
      },
    };
  }

  updateTheme = () => {
    const theme =
      this.props.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    this.props.updateTheme(theme);
    this.setState({
      theme,
    });
  };

  render = () => {
    return (
      <StyledThemeSwitcher
        borderRadius={"0.3rem"}
        theme={this.props.theme}
        onClick={this.updateTheme}
      >
        <StyledSpan margin={"0 0.5rem 0 0"}>
          <i className={this.state.params[this.props.theme].iconClass}></i>
        </StyledSpan>
        {this.state.params[this.props.theme].text + " THEME"}
      </StyledThemeSwitcher>
    );
  };
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = {
  updateTheme: updateTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
