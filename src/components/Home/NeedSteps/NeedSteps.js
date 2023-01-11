import React from "react";
import styled from "styled-components";
import { Step } from "./Step";

export const NeedSteps = ({ children, discription }) => {
  return (
    <Wrap>
      <StepsImages>
        <StepsImage1 src="/images/step1.png" alt="" />
        <StepsImage2 src="/images/step2.png" alt="" />
      </StepsImages>
      <StepsContainer>
        <StepsHeading>
          {children}
          <p>{discription}</p>
        </StepsHeading>
        <StepsWrap>
          <StepWrap>
            <Circle>
              <Dot></Dot>
            </Circle>
            <Step
              title="Tell us what you need to get done"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec. "
            ></Step>
          </StepWrap>

          <StepWrap>
            <Circle>
              <Dot></Dot>
            </Circle>
            <Step
              title="Subscription to a package"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec. "
            ></Step>
          </StepWrap>

          <StepWrap>
            <Circle>
              <Dot></Dot>
            </Circle>
            <Step
              title="Get matched with professionals"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec. "
            ></Step>
          </StepWrap>
        </StepsWrap>
      </StepsContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  background-color: #f8fdff;
  padding: 2.5rem 1.1rem;
  @media (min-width: 790px) {
    flex-basis: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 3rem 1.1rem;
  }
  @media (min-width: 1100px) {
    padding: 5rem 1.1rem;
  }
`;
const StepsImages = styled.div`
  display: none;
  @media (min-width: 790px) {
    display: flex;
    flex-basis: 50%;
    position: relative;
  }
`;
const StepsImage1 = styled.img`
  @media (min-width: 790px) {
    width: 50%;
    object-fit: contain;
    position: absolute;
    top: 30%;
    left: 4%;
  }
  @media (min-width: 1000px) {
    top: 24%;
    width: 45%;
  }
  @media (min-width: 1200px) {
    top: 20%;
    width: 40%;
  }
`;
const StepsImage2 = styled.img`
  @media (min-width: 790px) {
    width: 55%;
    object-fit: contain;
    position: absolute;
    top: 12%;
    left: 40%;
  }
  @media (min-width: 1000px) {
    top: 1%;
    width: 48%;
    left: 35%;
  }
  @media (min-width: 1200px) {
    top: -3%;
    width: 43%;
    left: 33%;
  }
`;
const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #061725;
  @media (min-width: 790px) {
    flex-basis: 50%;
    gap: 1.2rem;
  }
`;
const StepsHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 425px) {
    gap: 1rem;
  }
  @media (min-width: 790px) {
    gap: 0.5rem;
  }
  @media (min-width: 930px) {
    gap: 1rem;
  }
  h1 {
    font-size: 2rem;
    letter-spacing: 0.045rem;
    @media (min-width: 425px) {
      font-size: 2.4rem;
      line-height: 2.5rem;
    }
    @media (min-width: 496px) {
      max-width: 92.1%;
      font-size: 2.85rem;
      line-height: 2.8rem;
    }
    @media (min-width: 621px) {
      max-width: 71.8%;
    }
    @media (min-width: 790px) {
      max-width: 78.8%;
      font-size: 2rem;
      line-height: 2.2rem;
    }
    @media (min-width: 930px) {
      max-width: 81.7%;
      font-size: 2.5rem;
      line-height: 2.6rem;
    }
    @media (min-width: 1182px) {
      max-width: 68.6%;
      font-size: 2.7rem;
      line-height: 3rem;
    }
  }
  p {
    font-size: 0.9rem;
    font-weight: 100;
    letter-spacing: 0.005rem;
    @media (min-width: 550px) {
      font-size: 1rem;
    }
  }
`;
const StepsWrap = styled.div`
  width: 100%;
`;
const StepWrap = styled.div`
  position: relative;
  display: flex;
  ::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 0.06rem;
    top: 0;
    left: 0.8rem;
    background-color: #1c71b7;
  }
`;
const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #ddf0ff;
`;
const Dot = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: #1c71b7;
`;
