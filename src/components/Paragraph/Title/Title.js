import React from "react";
import Paragraph from "../Paragraph";

const Title = (props) => {
  return <Paragraph type="h1">{props.children}</Paragraph>;
};

export default Title;
