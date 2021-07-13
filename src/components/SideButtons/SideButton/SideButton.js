import React from "react";
import classes from "./SideButton.module.css";
const SideButton = (props) => {
  return (
    <div className={classes.icon} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default SideButton;
