import React, { useState } from "react";
import classes from "./TextContainer.module.css";
import SideButton from "../SideButton/SideButton";
import Paragraph from "../Paragraph/Paragraph";
import SideModal from "../SideButton/SideModal";

const TextContainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);
  return (
    <div
      className={[classes.container, classes[props.node.type]].join(" ")}
      type={props.type}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
    >
      <SideButton
        className={[
          classes.sideButton,
          isOnFocus && classes.sideButtonFocus,
        ].join(" ")}
        onClick={() => {
          setShowModal((prevShow) => !prevShow);
        }}
      />
      <Paragraph id={props.node.id} type={props.node.type}>
        {props.children}
      </Paragraph>
      <SideModal node={props.node} show={showModal} />
    </div>
  );
};

export default TextContainer;
