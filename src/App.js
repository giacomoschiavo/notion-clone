import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Paragraph from "./components/Component/Paragraph/Paragraph";
import Title from "./components/Component/Paragraph/Title/Title";

function App() {
  const [tree, setTree] = useState([{ type: "text", id: 0, focus: true }]);
  const [idCounter, setIdCounter] = useState(0);

  const onAppendParagraphHandler = () => {
    setTree([...tree, { type: "text", id: idCounter + 1, focus: true }]);
    setIdCounter((prev) => prev + 1);
  };

  return (
    <Container width={70} marginTop={100}>
      <Title onAppendParagraph={() => {}}></Title>
      {tree.map((node, index) => (
        <Paragraph
          key={node.id}
          id={node.id}
          type={node.type}
          onAppendParagraph={onAppendParagraphHandler}
          isFocused={node.focus}
        ></Paragraph>
      ))}
    </Container>
  );
}

export default App;
