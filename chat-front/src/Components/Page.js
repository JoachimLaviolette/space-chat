import React from "react";
import { Footer, Header } from ".";
import { StyledPage, StyledFlexBox } from "../Styles";

const Page = (props) => {
  return (
    <StyledFlexBox>
      <Header />
      <StyledPage backgroundColor={props.backgroundColor}>
        {props.children}
      </StyledPage>
      <Footer />
    </StyledFlexBox>
  );
};

export default Page;
