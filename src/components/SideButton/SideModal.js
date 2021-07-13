import React, { useState, useEffect } from "react";
import Modal from "../Container/Modal";
import classes from "./SideModal.module.css";

const SideModal = (props) => {
  const [showModal, setShowModal] = useState(props.show);

  useEffect(() => {
    setShowModal(props.show);
  }, [props.show]);

  const allClasses = [classes.modal];

  const onClickHandler = (type) => {
    props.node.type = type;
    setShowModal(false);
  };

  return (
    <Modal className={allClasses.join(" ")} show={showModal}>
      <div className={classes.item} onClick={onClickHandler.bind(this, "h1")}>
        Text
      </div>
      <div className={classes.item} onClick={onClickHandler.bind(this, "h1")}>
        Title
      </div>
      <div
        className={classes.item}
        onClick={onClickHandler.bind(this, "quote")}
      >
        Quote
      </div>
      <div
        className={classes.item}
        onClick={onClickHandler.bind(this, "callout")}
      >
        Callout
      </div>
    </Modal>
  );
};

export default SideModal;
