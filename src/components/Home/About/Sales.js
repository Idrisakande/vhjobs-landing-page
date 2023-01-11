import React from "react";
import styled from "styled-components";

export const Sales = ({ salesNumber, salesContent }) => {
  return (
    <Container>
      <h1>{salesNumber}</h1>
      <p>{salesContent}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 1.2rem;
    @media (min-width: 630px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-weight: 100;
    font-size: 0.7rem;
    text-align: center;
    @media (min-width: 630px) {
      font-size: 1rem;
    }
    @media (min-width: 1048px) {
      font-size: 1.4rem;
    }
  }
`;
