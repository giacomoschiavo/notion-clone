import React from "react";
import classes from "./Paragraph.module.css";

const Paragraph = (props) => {
  return (
    <div
      className={[classes.input, classes[props.type]].join(" ")}
      type={props.type}
      id={props.id}
      data-text={"Type something"}
      contentEditable
    ></div>
  );
};

export default React.memo(Paragraph);
