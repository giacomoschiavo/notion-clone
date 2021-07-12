import React from "react";
import Paragraph from "../Paragraph";

const Quote = (props) => {
  return <Paragraph type="quote">{props.children}</Paragraph>;
};

export default Quote;
