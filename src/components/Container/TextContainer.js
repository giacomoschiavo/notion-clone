import React, { useState } from "react";
import classes from "./TextContainer.module.css";
import SideButtons from "../SideButtons/SideButtons";
import Paragraph from "../Paragraph/Paragraph";
import SideModal from "../SideButtons/SideModal";

const TextContainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className={[classes.container, classes[props.node.type]].join(" ")}
      type={props.type}
    >
      <SideButtons
        className={classes.sideButtons}
        onDrag={() => {
          setShowModal((prevShow) => !prevShow);
        }}
        onAdd={() => {}}
      />
      <Paragraph id={props.node.id} type={props.node.type}>
        {props.children}
      </Paragraph>
      <SideModal
        node={props.node}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default React.memo(TextContainer);
