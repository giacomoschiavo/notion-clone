import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import classes from "./Paragaph.module.css";

const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: ${(props) => (props.type === "h1" ? 50 : 20)}px;
  border: 0;
  padding: 5px;
  padding-left: 0;
`;

const Paragraph = (props) => {
  const [text, setText] = useState("");
  const inputRef = useRef(""); // solo per il focus iniziale

  const changeFocus = (e) => {
    e.preventDefault();
    e.target.blur();
    props.onAppendParagraph();
  };

  useEffect(() => {
    if (props.isFocused) inputRef.current.focus();
  });

  return (
    <form className={classes.container} onSubmit={changeFocus}>
      <Input
        type={props.type}
        ref={inputRef}
        className={classes.paragraph}
        placeholder={props.placeholder || "Type something..."}
        value={text || props.children}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></Input>
    </form>
  );
};

export default Paragraph;
