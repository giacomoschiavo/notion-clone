import React from "react";
import SideButton from "./SideButton/SideButton";
import { GrDrag, GrAdd } from "react-icons/gr";
import classes from "./SideButtons.module.css";

const SideButtons = (props) => {
  return (
    <div className={[classes.sideButtonsContainer, props.className].join(" ")}>
      <SideButton onClick={props.onAdd}>
        <GrAdd />
      </SideButton>
      <SideButton onClick={props.onDrag}>
        <GrDrag />
      </SideButton>
    </div>
  );
};

export default SideButtons;
