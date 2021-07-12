import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import TreeCtx from "./store/tree-context";
import Container from "./components/Container/Container";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  const [tree, setTree] = useState([{ type: "text", id: 0 }]);
  const [idCounter, setIdCounter] = useState(0);

  // const onAppendParagraphHandler = useCallback(() => {
  //   setTree((prevTree) => [...prevTree, { type: "text", id: idCounter + 1 }]);
  //   setIdCounter((prevId) => prevId + 1);
  //   console.log(idCounter);
  // }, [idCounter]);

  const keydownHandler = useCallback(
    (e) => {
      const focusedElem = document.activeElement;
      if (focusedElem === document.body) return;
      if ((e.key === "Backspace" && !focusedElem.value) || e.key === "Delete") {
        setTree((prevTree) =>
          prevTree.filter((node) => node.id !== +focusedElem.id)
        );
      } else if (e.key === "Enter") {
        setTree((prevTree) => [
          ...prevTree,
          { type: "text", id: idCounter + 1 },
        ]);
        setIdCounter((prevId) => prevId + 1);
      }
    },
    [idCounter]
  );

  useEffect(() => {
    console.log("USE EFFECT");
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  // useEffect(() => {
  //   console.log(idCounter);
  // }, [idCounter]);

  return (
    <Container width={60} marginTop={100}>
      {tree.map((node) => (
        <Paragraph key={node.id} id={node.id} type={node.type} />
      ))}
    </Container>
  );
}

export default App;
