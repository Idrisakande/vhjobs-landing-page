import React from "react";
import styled from "styled-components";
import { Reason } from "./Reason";

export const Reasons = ({ children, discription }) => {
  return (
    <Wrap>
      <ReasonsHeading>
        {children}
        <p>{discription}</p>
      </ReasonsHeading>
      <ReasonContainer>
        <Reason
          title="Easily connect with service providers"
          discription="Connect easily with service providers and get your daily tasks done with simple clicks."
        >
          <img src="/images/reason1.png" alt="" />
        </Reason>
        <Reason
          title="Save time and money with quality professionals"
          discription="Be more productive by saving time on unnecessary chores, get your daily home and work tasks done by our skilled professionals."
        >
          <img src="/images/reason2.png" alt="" />
        </Reason>
        <Reason
          title="Trusted Service"
          discription="We make sure we run a check on our service providers so you are rest assured of quality service."
        >
          <img src="/images/reason3.png" alt="" />
        </Reason>
        <Reason
          title="Location is no barrier"
          discription="Wherever you are Vhjobs ensures to get you the closest trusted service providers to help you handle your tasks"
        >
          <img src="/images/reason4.png" alt="" />
        </Reason>
      </ReasonContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  text-align: center;
  color: #061725;
  padding: 1rem 0.7rem;
  padding-bottom: 4rem;
  @media (min-width: 320px) {
    padding-top: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 5rem 0;
    padding-bottom: 6rem;
  }
`;
const ReasonsHeading = styled.div`
  h1 {
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
  p {
    margin-top: 0.5rem;
    padding: 0 2.8rem;
    font-size: 0.9rem;
    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  }
`;
const ReasonContainer = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  margin-top: 3rem;
  row-gap: 1.5rem;
  img {
    width: 60%;
    animation: img-spin infinite 20s linear;
  }
  @keyframes img-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (min-width: 630px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    flex-basis: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1024px;
    margin: auto;
    margin-top: 4rem;
  }
`;
