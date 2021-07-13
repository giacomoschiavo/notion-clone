import React, { useState } from "react";
import Modal from "../Container/Modal";
import classes from "./SideModal.module.css";

const SideModal = (props) => {
  return (
    <Modal className={classes.modal}>
      <div>Title</div>
      <div>Quote</div>
      <div>Callout</div>
    </Modal>
  );
};

export default SideModal;
