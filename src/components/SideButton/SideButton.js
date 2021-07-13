import React, { useState } from "react";
import { GrDrag } from "react-icons/gr";
import classes from "./SideButton.module.css";
import SideModal from "./SideModal";
const SideButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const divClasses = [classes.container, props.className];
  return (
    <div
      className={divClasses.join(" ")}
      onClick={() => {
        console.log("Show Modal");
        setShowModal((prevShow) => !prevShow);
      }}
    >
      <GrDrag />
      {showModal && <SideModal />}
    </div>
  );
};

export default SideButton;
