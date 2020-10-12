import React from "react";
import { Router } from "../src/Components";
import { GlobalStyle } from "./Styles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  );
}

export default App;
