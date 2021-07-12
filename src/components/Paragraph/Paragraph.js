import React, { useEffect, useState, useRef, useContext } from "react";
// import TreeCtx from "../../store/tree-context";
import styled from "styled-components";
import TextContainer from "../Container/TextContainer";

const Input = styled.textarea`
  box-sizing: border-box;
  font-family: "Lato";
  width: 100%;
  outline: none;
  font-size: ${(props) =>
    props.type === "h1" ? 50 : 18}px; // da fare in Title
  border: 0;
  padding: 5px;
  padding-left: 0;
  margin: 5px;
  background-color: transparent;
  resize: none;
`;

const Paragraph = (props) => {
  const [text, setText] = useState(props.children);
  const inputRef = useRef(""); // solo per il focus iniziale
  // const ctx = useContext(TreeCtx);

  // const changeFocus = (e) => {
  //   e.preventDefault();
  //   e.target.blur();
  //   // ctx.appendParagraph();
  // };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   if (props.isFocused) inputRef.current.focus();
  // }, []);

  return (
    <TextContainer type={props.type}>
      {/* <form onSubmit={changeFocus}> */}
      <Input
        wrap="soft"
        rows="1"
        type={props.type}
        ref={inputRef}
        placeholder={props.placeholder || "Type something..."}
        value={text}
        onChange={onChangeHandler}
        id={props.id}
      ></Input>
      {/* </form> */}
    </TextContainer>
  );
};

export default Paragraph;
