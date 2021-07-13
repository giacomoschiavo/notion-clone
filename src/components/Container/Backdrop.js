import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledBackdrop = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Backdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <StyledBackdrop onClick={props.onClick}></StyledBackdrop>,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default Backdrop;
