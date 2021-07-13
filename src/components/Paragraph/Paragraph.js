import React, { useRef } from "react";
import classes from "./Paragraph.module.css";

const Paragraph = (props) => {
  const inputRef = useRef("");

  return (
    <div
      ref={inputRef}
      className={[classes.input, classes[props.type]].join(" ")}
      type={props.type}
      id={props.id}
      data-text={"Type something..."}
      contentEditable
    ></div>
  );
};

export default Paragraph;
