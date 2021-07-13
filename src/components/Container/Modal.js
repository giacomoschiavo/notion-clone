import React, { useState, useEffect } from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(props.show);

  const { show } = props;
  useEffect(() => {
    setShowModal(show);
    return () => {};
  }, [show]);

  return showModal ? (
    <>
      <Backdrop
        onClick={() => {
          setShowModal(false);
        }}
      />
      <div className={[classes.modal, props.className].join(" ")}>
        {props.children}
      </div>
    </>
  ) : null;
};

export default Modal;
