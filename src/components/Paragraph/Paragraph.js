import React, { useRef } from "react";
import classes from "./Paragraph.module.css";

const Paragraph = (props) => {
  const inputRef = useRef("");

  return (
    <div
      className={[classes.input, classes[props.type]].join(" ")}
      type={props.type}
      id={props.id}
      ref={inputRef}
      data-text={"Type something..."}
      contentEditable
    ></div>
  );
};

export default Paragraph;
