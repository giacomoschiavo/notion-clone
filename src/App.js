import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Paragraph/Title/Title";

function App() {
  const [tree, setTree] = useState([{ type: "text", id: 0 }]);
  const [idCounter, setIdCounter] = useState(0);

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
    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return (
    <Container width={60} marginTop={100}>
      <Title>New Title</Title>
      {tree.map((node) => (
        <Paragraph key={node.id} id={node.id} type={node.type} />
      ))}
    </Container>
  );
}

export default App;
