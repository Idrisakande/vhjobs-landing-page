import React from "react";
import styled from "styled-components";

export const Step = ({ title, discription }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <p>{discription}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 2.5rem;
  @media (min-width: 790px) {
    padding-left: 2.2rem;
  }
  h4 {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.005rem;
    @media (min-width: 630px) {
      font-size: 1.1rem;
    }
    @media (min-width: 790px) {
      font-size: 1rem;
    }
    @media (min-width: 1182px) {
      font-size: 1.1rem;
    }
  }
  p {
    font-size: 0.8rem;
    font-weight: 100;
    line-height: 21px;
    letter-spacing: 0.005rem;
    @media (min-width: 630px) {
      font-size: 0.84rem;
    }
    @media (min-width: 790px) {
      font-size: 0.8rem;
    }
    @media (min-width: 1121px) {
      max-width: 88%;
    }
    @media (min-width: 1182px) {
      font-size: 0.85rem;
    }
  }
`;
