import React from "react";
import styled from "styled-components";

/**
 * Container è usato esclusivamente come un contenitore centrato che riceve
 * width come parametro. E' piu un wrapper che altro
 */
const StyledContainer = styled.div`
  text-align: center;
  width: ${(props) => props.width || 50}%;
  margin: auto;
`;

const Container = (props) => {
  return (
    <StyledContainer width={props.width}>{props.children}</StyledContainer>
  );
};

export default Container;
