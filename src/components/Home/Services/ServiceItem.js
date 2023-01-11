import React from "react";
import styled from "styled-components";

export const ServiceItem = ({
  backgroundColor,
  children,
  title,
  discription,
}) => {
  return (
    <Container background={backgroundColor}>
      {children}
      <h4>{title}</h4>
      <p>{discription}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => `${props.background}`};
  opacity: 0.8;
  border-radius: 0.6rem;
  padding: 1.1rem 2rem 1rem 0.5rem;
  width: 7.5rem;
  height: 8.5rem;
  overflow: hidden;
  @media (min-width: 460px) {
    padding: 1.7rem 0.9rem 1rem 0.9rem;
    width: 9.5rem;
    height: 9.5rem;
  }
  @media (min-width: 630px) {
    padding: 1.7rem 1.1rem 1rem 1.1rem;
    width: 15rem;
    height: 15rem;
  }
  h4 {
    margin-top: 1rem;
    font-size: 0.8rem;
    letter-spacing: 0.08rem;
    @media (min-width: 630px) {
      font-size: 1rem;
      margin: 1rem 0 0.5rem 0;
      line-height: 1.3rem;
      max-width: 6.5rem;
    }
    @media (min-width: 800px) {
      font-size: 1.1rem;
      margin: 1rem 0 0.5rem 0;
      line-height: 1.4rem;
    }
  }
  p {
    display: none;
    font-size: 0.8rem;
    @media (min-width: 630px) {
      display: flex;
      font-size: 0.8rem;
    }
  }
`;
