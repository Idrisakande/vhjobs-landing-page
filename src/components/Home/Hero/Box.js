import React from "react";
import styled from "styled-components";

export const Box = () => {
  return <Container></Container>;
};

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  height: 2.3rem;
  width: 100%;
  margin: auto;
  flex-basis: 31%;
  @media (min-width: 375px) {
    height: 3rem;
  }
  @media (min-width: 486px) {
    height: 4.1rem;
  }
  @media (min-width: 768px) {
    height: 5rem;
  }
  @media (min-width: 1024px) {
    height: 7rem;
  }
  @media (min-width: 1100px) {
    height: 8rem;
  }
`;
