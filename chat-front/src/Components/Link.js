import React from "react";
import { HashLink } from "react-router-hash-link";

const Link = ({ hoverless, paddingless, centerimg, ...rest }) => (
  <HashLink {...rest} />
);

export default Link;
