import React from "react";
import styled from "styled-components";

/**
 * Container è usato esclusivamente come un contenitore centrato che riceve
 * width come parametro. E' piu un wrapper che altro
 */
const StyledContainer = styled.div`
  width: ${(props) => props.width || 50}%;
  margin: auto;
  margin-top: ${(props) => props.marginTop}px;
`;

const Container = (props) => {
  return (
    <StyledContainer width={props.width} marginTop={props.marginTop}>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
