import React, { useState } from "react";
import "./App.css";
import TreeCtx from "./store/tree-context";
import Container from "./components/Container/Container";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Paragraph/Title/Title";

function App() {
  const [tree, setTree] = useState([{ type: "text", id: 0, focus: true }]);
  const [idCounter, setIdCounter] = useState(0);

  const onAppendParagraphHandler = () => {
    setTree([...tree, { type: "text", id: idCounter + 1, focus: true }]);
    setIdCounter((prev) => prev + 1);
  };

  return (
    <TreeCtx.Provider value={{ appendParagraph: onAppendParagraphHandler }}>
      <Container width={70} marginTop={100}>
        <Title onAppendParagraph={() => {}}></Title>
        {tree.map((node, index) => (
          <Paragraph
            key={node.id}
            id={node.id}
            type={node.type}
            isFocused={node.focus}
          ></Paragraph>
        ))}
      </Container>
    </TreeCtx.Provider>
  );
}

export default App;
