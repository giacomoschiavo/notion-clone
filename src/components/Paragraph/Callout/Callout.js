import React from "react";
import Paragraph from "../Paragraph";

const Callout = (props) => {
  return <Paragraph type="callout">{props.children}</Paragraph>;
};

export default Callout;
