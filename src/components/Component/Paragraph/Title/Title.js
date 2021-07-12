import React from "react";
import Paragraph from "../Paragraph";

const Title = (props) => {
  return (
    <Paragraph
      onAppendParagraph={props.onAppendParagraph}
      type={"h1"}
      placeholder={"Insert a title"}
    >
      {props.children}
    </Paragraph>
  );
};

export default Title;
