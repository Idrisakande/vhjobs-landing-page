import React from "react";
import styled from "styled-components";
import EastIcon from "@mui/icons-material/East";

export const Explore = ({ title, buttonText }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Button>
        <ButtonWrap>
          <ButtonText>{buttonText}</ButtonText>
          <ArrowButton />
        </ButtonWrap>
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  background: #ddf0ff;
  text-align: center;
  padding: 3rem 0;
  @media (min-width: 800px) {
    padding: 4rem 0;
  }
  @media (min-width: 1024px) {
    padding: 5rem 0;
  }
  @media (min-width: 1200px) {
    padding: 7rem 0;
  }
`;
const Title = styled.div`
  color: #8b0093;
  font-weight: 700;
  font-size: 1.25rem;
  @media (min-width: 800px) {
    font-size: 1.85rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.8rem;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.3rem;
  @media (min-width: 800px) {
    margin-top: 1.6rem;
  }
`;
const ButtonWrap = styled.div`
  background-color: #1c71b7;
  display: flex;
  color: #ffffff;
  align-items: center;
  padding: 0.68rem 1.9rem;
  border-radius: 1.9rem;
  cursor: pointer;
  @media (min-width: 800px) {
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.03rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.85rem;
  }
  @media (min-width: 1200px) {
    font-size: 0.9rem;
  }
`;
const ButtonText = styled.div`
  margin-right: 0.5rem;
`;
const ArrowButton = styled(EastIcon)`
  width: 0.5rem;
`;
