import React, { useState, useEffect, useCallback } from "react";
import classes from "./Container.module.css";
import TextContainer from "./TextContainer";
import TreeCtx from "../store/tree-context";

const Container = () => {
  const [tree, setTree] = useState([{ type: "h1", id: 0 }]);
  const [idCounter, setIdCounter] = useState(0);
  const [focusElemId, setFocusElemId] = useState(0);

  const treeLength = tree.length;

  const keydownHandler = useCallback(
    (e) => {
      const focusedElem = document.activeElement;
      if (focusedElem === document.body) return;
      if (
        ((e.key === "Backspace" && !focusedElem.textContent) ||
          e.key === "Delete") &&
        treeLength > 1 &&
        focusedElem.id
      ) {
        setTree((prevTree) =>
          prevTree.filter((node) => node.id !== +focusedElem.id)
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const newId = idCounter + 1;
        setTree((prevTree) => {
          const index = prevTree.findIndex(
            (node) => node.id === +focusedElem.id
          );
          prevTree.splice(index + 1, 0, { type: "text", id: newId });
          return [...prevTree];
        });
        focusedElem.blur();
        setFocusElemId(newId);
        setIdCounter((prevId) => prevId + 1);
      }
    },
    [idCounter, treeLength]
  );

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  useEffect(() => {
    document.getElementById(focusElemId).focus();
  }, [focusElemId]);

  return (
    <TreeCtx.Provider value={{ setTree: setTree }}>
      <div className={classes.container}>
        {tree.map((node) => (
          <TextContainer key={node.id} node={node} />
        ))}
      </div>
    </TreeCtx.Provider>
  );
};

export default Container;
