import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import TextContainer from "./TextContainer";

/**
 * Container è usato esclusivamente come un contenitore centrato che riceve
 * width come parametro. E' piu un wrapper che altro
 */
const StyledContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 100px;
`;

const Container = (props) => {
  const [tree, setTree] = useState([{ type: "h1", id: 0 }]);
  const [idCounter, setIdCounter] = useState(0);
  const [focusElemId, setFocusElemId] = useState(0);

  const keydownHandler = useCallback(
    (e) => {
      const focusedElem = document.activeElement;
      if (focusedElem === document.body) return;
      if (
        (focusedElem.id && e.key === "Backspace" && !focusedElem.textContent) || // possono eliminare solo quelli che sono in tree
        e.key === "Delete"
      ) {
        setTree((prevTree) =>
          prevTree.filter((node) => node.id !== +focusedElem.id)
        );
      } else if (e.key === "Enter") {
        focusedElem.blur();
        setTree((prevTree) => {
          const index = prevTree.findIndex(
            (node) => node.id === +focusedElem.id
          );
          prevTree.splice(index + 1, 0, { type: "text", id: idCounter + 1 });
          return [...prevTree];
        });
        setFocusElemId(idCounter + 1);
        setIdCounter((prevId) => prevId + 1);
      }
    },
    [idCounter]
  );

  useEffect(() => {
    document.getElementById(focusElemId).focus();
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return (
    <StyledContainer width={props.width} marginTop={props.marginTop}>
      {tree.map((node) => (
        <TextContainer key={node.id} id={node.id} type={node.type} />
      ))}
    </StyledContainer>
  );
};

export default Container;
