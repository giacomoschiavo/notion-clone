import React, { useState } from "react";
import styled from "styled-components";
import TextContainer from "../Container/TextContainer";
import SideButton from "../SideButton/SideButton";

const Input = styled.div`
  box-sizing: border-box;
  font-family: "Lato";
  width: 100%;
  outline: none;
  font-size: ${(props) =>
    props.type === "h1" ? 50 : 18}px; // da fare in Title
  border: 0;
  padding: 5px;
  padding-left: 0;
  border: 1px solid black;
  margin: 5px;
  background-color: transparent;
`;

const Paragraph = (props) => {
  const [text, setText] = useState(props.children || "");
  const [isOnFocus, setIsOnFocus] = useState(false);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <TextContainer type={props.type}>
      {/* {isOnFocus && <SideButton />} */}
      <SideButton />
      <Input
        wrap="soft"
        rows="1"
        type={props.type}
        placeholder={"Type something..."} // yes
        value={text}
        onChange={onChangeHandler}
        id={props.id}
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
        contentEditable
      ></Input>
    </TextContainer>
  );
};

export default Paragraph;
