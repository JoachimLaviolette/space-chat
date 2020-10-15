import React from "react";
import { connect } from "react-redux";
import {
  DefaultStyle,
  StyledFlexBox,
  StyledParagraph,
  StyledAnchor,
} from "../Styles";
import { Link } from ".";
import { URLS, Themes } from "../Utils";

const Footer = (props) => {
  return (
    <StyledFlexBox
      backgroundColor={
        props.theme === Themes.LIGHT
          ? DefaultStyle.COLOR.FOOTER_LIGHT
          : DefaultStyle.COLOR.FOOTER_DARK
      }
      padding={"2rem"}
      textAlign={"center"}
      color={
        props.theme === Themes.DARK
          ? DefaultStyle.COLOR.FOOTER_LIGHT
          : DefaultStyle.COLOR.FOOTER_DARK
      }
    >
      <StyledParagraph>{"Space'Chat"}</StyledParagraph>
      <StyledAnchor
        color={
          props.theme === Themes.DARK
            ? DefaultStyle.COLOR.FOOTER_LIGHT
            : DefaultStyle.COLOR.FOOTER_DARK
        }
        as={Link}
        to={URLS.HOME_PAGE}
      >
        <StyledParagraph fontWeight={"bold"}>
          <u>{"www.space-chat.com"}</u>
        </StyledParagraph>
      </StyledAnchor>
    </StyledFlexBox>
  );
};

const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps, null)(Footer);
