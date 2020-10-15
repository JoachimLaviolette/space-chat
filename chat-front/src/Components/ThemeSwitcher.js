import React, { Component } from "react";
import { connect } from "react-redux";
import { DefaultStyle, StyledThemeSwitcher, StyledParagraph } from "../Styles";
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
          iconClass: "fas fa-moon",
        },
        [Themes.DARK]: {
          backgroundColor: DefaultStyle.COLOR.LIGHT,
          textColor: DefaultStyle.COLOR.THEME_SWITCHER_DARK,
          iconClass: "fas fa-sun",
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
      <StyledThemeSwitcher theme={this.props.theme} onClick={this.updateTheme}>
        <i className={this.state.params[this.props.theme].iconClass}></i>
      </StyledThemeSwitcher>
    );
  };
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = {
  updateTheme: updateTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
