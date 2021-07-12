import React, { useRef } from "react";
import styled from "styled-components";
import classes from "./Paragaph.module.css";

const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 25px;
`;

const Paragraph = (props) => {
  const inputRef = useRef("");

  return (
    <form className={classes.container} onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        ref={inputRef}
        className={classes.paragraph}
        onChange={() => {
          // console.log(inputRef.current.tabIndex);
        }}
      ></Input>
    </form>
  );
};

export default Paragraph;
