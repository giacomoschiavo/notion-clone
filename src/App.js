import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Title from "./components/Paragraph/Title/Title";
import TextContainer from "./components/Container/TextContainer";

function App() {
  const [tree, setTree] = useState([{ type: "h1", id: 0 }]);
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
      {tree.map((node) => (
        <TextContainer key={node.id} id={node.id} type={node.type} />
      ))}
    </Container>
  );
}

export default App;
