import React from "react";
import { connect } from "react-redux";
import { DefaultStyle, StyledFlexBox } from "../Styles";
import { ThemeSwitcher } from ".";

const Header = (props) => {
  return (
    <StyledFlexBox backgroundColor={DefaultStyle.COLOR.HEADER} padding={"2rem"}>
      <ThemeSwitcher />
    </StyledFlexBox>
  );
};

const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps, null)(Header);
