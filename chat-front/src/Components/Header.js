import React from "react";
import { connect } from "react-redux";
import { DefaultStyle, StyledFlexBox } from "../Styles";
import { ThemeSwitcher } from ".";
import { Themes } from "../Utils";

const Header = (props) => {
  return (
    <StyledFlexBox
      backgroundColor={
        props.theme === Themes.LIGHT
          ? DefaultStyle.COLOR.HEADER_LIGHT
          : DefaultStyle.COLOR.HEADER_DARK
      }
      padding={"1rem"}
      alignItems={"center"}
    >
      <ThemeSwitcher />
    </StyledFlexBox>
  );
};

const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps, null)(Header);
