import EastIcon from "@mui/icons-material/East";
import React from "react";
import styled from "styled-components";

export const Skill = ({ title, discription, buttonText }) => {
  return (
    <Wrap>
      <SkillText>
        <Title>{title}</Title>
        <Discription>{discription}</Discription>
        <ButtonWrap>
          <Button>
            <ButtonText>{buttonText}</ButtonText>
            <ArrowButton />
          </Button>
        </ButtonWrap>
      </SkillText>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 24rem;
  background: #1c71b7;
  margin: 0 0.7rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  background-image: url("/images/skill2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 525px) {
    height: 30rem;
  }
  @media (min-width: 830px) {
    background-image: url("/images/skill1.png");
  }
  @media (min-width: 1099px) {
    height: 40rem;
  }
`;
const SkillText = styled.div`
  margin-top: 3rem;
  color: #ffffff;
  padding: 2rem 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  @media (min-width: 830px) {
    max-width: 50%;
  }
  @media (min-width: 1099px) {
    max-width: 47%;
  }
`;
const Title = styled.div`
  margin-top: 7.4rem;
  font-size: 1.7rem;
  font-weight: 700;
  @media (min-width: 1099px) {
    font-size: 2.4rem;
    margin-top: 12rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
    line-height: 3rem;
    max-width: 70%;
    margin-top: 10rem;
  }
`;
const Discription = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3rem;
  @media (min-width: 525px) {
    font-size: 1rem;
  }
`;
const ButtonWrap = styled.div`
  margin-top: 1rem;
  @media (min-width: 1099px) {
    margin-top: 1rem;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify: flex-start;
  align-items: center;
  text-align: flex-start;
  color: #061725;
  background: #ffffff;
  max-width: 10rem;
  border-radius: 1.5rem;
  font-size: 0.4rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-size: 0.75rem;
  margin-right: 0.4rem;
  font-weight: 600;
  @media (min-width: 830px) {
    font-size: 0.8rem;
  }
`;
const ArrowButton = styled(EastIcon)`
  color: #1c71b7;
`;
