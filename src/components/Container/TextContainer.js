import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.type === "h1" &&
    css`
      /* height: 50px; */
    `}

  ${(props) =>
    props.type === "quote" &&
    css`
      border-left: 5px solid #555;
      padding-left: 5px;
      margin: 15px 5px;
    `}

  ${(props) =>
    props.type === "callout" &&
    css`
      padding: 15px;
      background-color: #eee;
      margin: 15px 5px;
    `}
`;

const TextContainer = (props) => {
  return <Container type={props.type}>{props.children}</Container>;
};

export default TextContainer;
