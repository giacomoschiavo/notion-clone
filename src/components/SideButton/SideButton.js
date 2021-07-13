import React from "react";
import { GrDrag } from "react-icons/gr";
import classes from "./SideButton.module.css";
const SideButton = (props) => {
  const divClasses = [classes.container, props.className];

  return (
    <div className={divClasses.join(" ")}>
      <GrDrag />
    </div>
  );
};

export default SideButton;
