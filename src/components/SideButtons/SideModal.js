import React from "react";
import Modal from "../Container/Modal";
import classes from "./SideModal.module.css";

const SideModal = (props) => {
  const allClasses = [classes.modal];

  const onClickHandler = (type) => {
    // props.node.type = type; // TODO: pls change this
    props.onClose();
  };

  return (
    <Modal
      className={allClasses.join(" ")}
      show={props.show}
      onBackdropClose={props.onClose}
    >
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
