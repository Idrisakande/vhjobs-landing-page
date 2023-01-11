import React from "react";
import styled from "styled-components";

export const Reason = ({ children, title, discription }) => {
  return (
    <Wrap>
      <CircleImg>{children}</CircleImg>
      <Title>{title}</Title>
      <Discription>{discription}</Discription>
    </Wrap>
  );
};

const Wrap = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08), 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  @media (min-width: 630px) {
    flex-basis: 47%;
  }
  @media (min-width: 786px) {
    flex-basis: 30%;
  }
  @media (min-width: 1024px) {
    flex-basis: 23%;
    padding: 2rem 1rem;
  }
`;
const CircleImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 21.5625px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  @media (min-width: 320px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
const Title = styled.div`
  margin-top: 1.3rem;
  font-weight: 700;
  line-height: 21px;
  @media (min-width: 320px) {
    font-weight: 600;
    font-size: 0.95rem;
  }
  @media (min-width: 786px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.95rem;
  }
`;
const Discription = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.25rem;
  min-height: 5rem;
  @media (min-width: 320px) {
    font-weight: 500;
    min-height: 4rem;
    font-size: 0.8rem;
  }
  @media (min-width: 786px) {
    font-size: 0.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
`;
