import React from "react";
import { IoReloadCircleOutline } from "react-icons/io5";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const SideButton = () => {
  return (
    <Container>
      <IoReloadCircleOutline />
    </Container>
  );
};

export default SideButton;
