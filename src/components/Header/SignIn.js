import React from "react";
import styled from "styled-components";

export const SignIn = ({ name }) => {
  return <Button>{name}</Button>;
};

const Button = styled.div`
  // height: 2.5rem;
  // width: 8rem;
  padding: 0.5rem 1.8rem;
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.06rem;
  background-color: #1c71b7;
  border: 1px solid #1c71b7;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background: transparent;
    color: #1c71b7;
  }
  @media (min-width: 630px) {
    display: flex;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.7rem 2.8rem;
  }
`;
