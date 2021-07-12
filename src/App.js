import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Paragraph from "./components/Component/Paragraph/Paragraph";
import Title from "./components/Component/Title/Title";

function App() {
  const [tree, setTree] = useState([
    { text: "", type: "text", id: 0, focus: true },
  ]);
  const [idCounter, setIdCounter] = useState(0);

  const onAppendParagraphHandler = () => {
    setTree([
      ...tree,
      { text: "", type: "text", id: idCounter + 1, focus: true },
    ]);
    setIdCounter((prev) => prev + 1);
  };

  return (
    <Container width={70} marginTop={100}>
      <Title>Insert Title</Title>
      {tree.map((node, index) => (
        <Paragraph
          key={node.id}
          type={node.type}
          onAppendParagraph={onAppendParagraphHandler}
          isFocused={node.focus}
        >
          {node.text}
        </Paragraph>
      ))}
    </Container>
  );
}

export default App;
