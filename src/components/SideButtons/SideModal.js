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

  const types = ["text", "h1", "quote", "callout"];

  return (
    <Modal
      className={allClasses.join(" ")}
      show={props.show}
      onBackdropClose={props.onClose}
    >
      {types.map((type) => (
        <div
          key={type}
          className={classes.item}
          onClick={onClickHandler.bind(this, type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
      ))}
    </Modal>
  );
};

export default SideModal;
