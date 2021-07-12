import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import classes from "./Paragaph.module.css";

const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 20px;
  border: 0;
  padding: 5px;
  padding-left: 0;
`;

const Paragraph = (props) => {
  const inputRef = useRef("");

  const changeFocus = (e) => {
    e.preventDefault();
    inputRef.current.blur();
    props.onAppendParagraph();
  };

  useEffect(() => {
    if (props.isFocused) inputRef.current.focus();
  });

  return (
    <form className={classes.container} onSubmit={changeFocus}>
      <Input
        type="text"
        ref={inputRef}
        className={classes.paragraph}
        placeholder={"Type something✍"}
      ></Input>
    </form>
  );
};

export default Paragraph;
