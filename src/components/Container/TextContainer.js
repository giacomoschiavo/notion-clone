import React, { useState } from "react";
import classes from "./TextContainer.module.css";
import SideButton from "../SideButton/SideButton";
import Paragraph from "../Paragraph/Paragraph";

const TextContainer = (props) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  return (
    <div
      className={{ ...classes.container, ...classes[props.type] }}
      type={props.type}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
    >
      {/* {isOnFocus && <SideButton />} */}
      <SideButton />
      <Paragraph id={props.id} type={props.type}>
        {props.children}
      </Paragraph>
    </div>
  );
};

export default TextContainer;
