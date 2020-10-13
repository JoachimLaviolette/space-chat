import React from "react";
import { connect } from "react-redux";
import {
  DefaultStyle,
  StyledFlexBox,
  StyledParagraph,
  StyledAnchor,
} from "../Styles";
import { Link } from ".";
import { URLS } from "../Utils";

const Footer = () => {
  return (
    <StyledFlexBox
      backgroundColor={DefaultStyle.COLOR.FOOTER}
      padding={"2rem"}
      textAlign={"center"}
      color={DefaultStyle.COLOR.WHITE}
    >
      <StyledParagraph>{"Space'Chat"}</StyledParagraph>
      <StyledAnchor as={Link} to={URLS.HOME_PAGE}>
        <StyledParagraph fontWeight={"bold"}>
          <u>{"www.space-chat.com"}</u>
        </StyledParagraph>
      </StyledAnchor>
    </StyledFlexBox>
  );
};

const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps, null)(Footer);
