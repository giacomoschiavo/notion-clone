import React, { useContext } from "react";
import Modal from "../Container/Modal";
import classes from "./SideModal.module.css";
import TreeCtx from "../store/tree-context";

const SideModal = (props) => {
  const allClasses = [classes.modal];
  const ctx = useContext(TreeCtx);

  const onClickHandler = (type) => {
    ctx.setTree((prevTree) => {
      const index = prevTree.findIndex((node) => node.id === props.node.id);
      prevTree[index].type = type;
      return prevTree;
    });
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
