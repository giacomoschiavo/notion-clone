import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return props.show ? (
    <>
      <Backdrop onClick={props.onBackdropClose} />
      <div className={[classes.modal, props.className].join(" ")}>
        {props.children}
      </div>
    </>
  ) : null;
};

export default Modal;
