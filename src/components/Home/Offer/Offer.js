import React from "react";
import styled from "styled-components";

export const Offer = ({ discount, buttonText1, buttonText2 }) => {
  return (
    <Wrap>
      <OfferImg>
        <Image src="/images/offer.png" alt="" />
      </OfferImg>
      <OfferWrap>
        <Discount>{discount}</Discount>
        <Button>
          <ButtonText1>{buttonText1}</ButtonText1>
          <ButtonText2>{buttonText2}</ButtonText2>
        </Button>
      </OfferWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #1c71b7;
  box-shadow: 3px 2px 8px rgba(28, 113, 183, 0.5);
  border-radius: 0.8rem;
  margin: 1.5rem 0.8rem;
  text-align: center;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  @media (min-width: 630px) {
    margin: 3rem 0.8rem;
  }
  @media (min-width: 1024px) {
    margin: 5rem 0.8rem;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    padding: 4rem 2rem;
  }
`;
const OfferImg = styled.div`
  @media (min-width: 800px) {
    flex-basis: 50%;
    text-align: start;
  }
`;
const Image = styled.img`
  max-width: 70%;
  @media (min-width: 800px) {
    max-width: 90%;
  }
`;
const OfferWrap = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  @media (min-width: 800px) {
    flex-basis: 50%;
    text-align: start;
    justify-content: center;
    row-gap: 3rem;
  }
  @media (min-width: 1200px) {
    row-gap: 4rem;
  }
`;
const Discount = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  @media (min-width: 375px) {
    font-size: 1.5rem;
  }
  @media (min-width: 800px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1048px) {
    font-size: 2.3rem;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-weight: 600;
  letter-spacing: 0.02rem;
  @media (min-width: 630px) {
    width: 60%;
    margin: auto;
  }
  @media (min-width: 730px) {
    width: 50%;
  }
  @media (min-width: 800px) {
    width: 90%;
    margin: 0;
  }
  @media (min-width: 960px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 60%;
  }
`;
const ButtonText1 = styled.div`
  color: #061725;
  background: #ffffff;
  font-size: 0.7rem;
  padding: 0.7rem 1.5rem;
  border-radius: 1.7rem;
  cursor: pointer;
  :hover {
    color: #1c71b7;
  }
  @media (min-width: 375px) {
    font-size: 0.85rem;
    padding: 0.7rem 1.9rem;
  }
  @media (min-width: 800px) {
    font-size: 0.85rem;
  }
`;
const ButtonText2 = styled.div`
  font-size: 0.7rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  @media (min-width: 375px) {
    font-size: 0.75rem;
  }
`;
