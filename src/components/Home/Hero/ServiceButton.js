import React from "react";
import styled from "styled-components";

function ServiceButton({ value }) {
  return (
    <Wrap>
      <Button>{value}</Button>
    </Wrap>
  );
}

export default ServiceButton;

const Wrap = styled.div`
  display: flex;
`;

const Button = styled.div`
  color: #fff;
  background: transparent;
  font-size: 0.65rem;
  letter-spacing: 0.045rem;
  border: 1px solid #fff;
  border-radius: 1rem;
  width: 4.7rem;
  height: 1.65rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 285px) {
    width: 5rem;
    height: 1.7rem;
  }
  @media (min-width: 630px) {
    font-size: 0.66rem;
  }
`;
