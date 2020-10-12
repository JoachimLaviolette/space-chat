import React from "react";
import { StyledPage } from "../Styles";

function Page(props) {
  return (
    <StyledPage backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledPage>
  );
}

export default Page;
