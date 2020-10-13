import React from "react";
import { StyledPage } from "../Styles";

const Page = (props) => {
  return (
    <StyledPage backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledPage>
  );
};

export default Page;
