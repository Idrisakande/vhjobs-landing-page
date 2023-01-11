import React from "react";
import styled from "styled-components";
import { Sales } from "./Sales";
import { VerticalHeight } from "./VerticalHeight";

export const About = ({ children, discription, buttonText }) => {
  return (
    <Wrap>
      <ContentWrap>
        <ContentText>
          {children}
          <p>{discription}</p>
          <Button>
            <ButtonText>{buttonText}</ButtonText>
            <ArrowButton src="/images/arrow1.png" alt="" />
          </Button>
        </ContentText>
        <ContentImg src="/images/about.png" alt="" />
      </ContentWrap>
      <SalesGroup>
        <Sales salesNumber="5k+" salesContent="Packages sold" />
        <VerticalHeight />
        <Sales salesNumber="1k+" salesContent="Customers" />
        <VerticalHeight />
        <Sales salesNumber="200+" salesContent="Handled" />
      </SalesGroup>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  padding-top: 3.5rem;
  @media (min-width: 486px) {
    padding-top: 5rem;
  }
  @media (min-width: 790px) {
    padding-top: 6rem;
  }
  @media (min-width: 1024px) {
    padding-top: 8rem;
  }
  @media (min-width: 1240px) {
    padding-top: 10rem;
  }
`;
const ContentWrap = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem 1.3rem 0 1.3rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  @media (min-width: 550px) {
    padding: 2rem 1.3rem 1rem 1.3rem;
  }
  @media (min-width: 790px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    padding: 2rem 1.3rem 3rem 1.3rem;
  }
  @media (min-width: 1048px) {
    padding: 4rem 3rem;
    border-radius: 1.5rem 1.5rem 0rem 0rem;
  }
`;
const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #061725;
  @media (min-width: 630px) {
  }
  @media (min-width: 550px) {
    text-align: start;
    justify-content: center;
  }
  @media (min-width: 790px) {
    width: 50%;
  }
  h1 {
    font-size: 2rem;
    line-height: 2.7rem;
    letter-spacing: 0.005rem;
    @media (min-width: 375px) {
      max-width: 79.9%;
    }
    @media (min-width: 425px) {
      font-size: 2.4rem;
    }
    @media (min-width: 496px) {
      font-size: 2.8rem;
    }
    @media (min-width: 588px) {
      max-width: 63.8%;
    }
    @media (min-width: 790px) {
      font-size: 2rem;
      line-height: 2.3rem;
    }
    @media (min-width: 930px) {
      font-size: 2.5rem;
      line-height: 2.8rem;
    }
    @media (min-width: 1118px) {
      font-size: 2.75rem;
      line-height: 3rem;
      max-width: 80%;
    }
  }
  p {
    font-size: 0.9rem;
    font-weight: 100;
    line-height: 1.25rem;
    letter-spacing: 0.005rem;
    @media (min-width: 550px) {
      max-width: 27rem;
    }
    @media (min-width: 790px) {
      font-size: 0.8rem;
      max-width: 20rem;
    }
    @media (min-width: 930px) {
      font-size: 0.9rem;
      line-height: 1.3rem;
      max-width: 25rem;
    }
    @media (min-width: 1254px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #1c71b7;
  color: #fff;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  border-radius: 1.9rem;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
  @media (min-width: 550px) {
    letter-spacing: 0.04rem;
    padding: 0.9rem 0;
    max-width: 60%;
    margin-top: 1rem;
  }
  @media (min-width: 630px) {
    max-width: 50%;
  }
  @media (min-width: 790px) {
    max-width: 70%;
    font-size: 0.7rem;
  }
  @media (min-width: 800px) {
    padding: 0.8rem 0;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    max-width: 20rem;
  }
  @media (min-width: 1048px) {
    font-size: 1rem;
    max-width: 23rem;
    padding: 1.2rem 0;
    font-weight: 600;
  }
`;
const ButtonText = styled.div`
  margin-right: 0.4rem;
`;
const ArrowButton = styled.img`
  max-width: 1.1rem;
  object-fit: contain;
`;
const ContentImg = styled.img`
  display: flex;
  object-fit: contain;
  @media (min-width: 550px) {
    max-width: 90%;
  }
  @media (min-width: 680px) {
    max-width: 75%;
  }
  @media (min-width: 790px) {
    max-width: 45%;
    margin: auto;
  }
`;
const SalesGroup = styled.div`
  background: linear-gradient(273.36deg, #09263d 0%, #1c71b7 100%);
  display: flex;
  justify-content: space-around;
  color: #fff;
  padding: 1rem 0.8rem;
  border-radius: 0 0 0.5rem 0.5rem;
  @media (min-width: 550px) {
    padding: 1.5rem 0rem;
  }
  @media (min-width: 790px) {
    padding: 2rem 0rem;
  }
  @media (min-width: 1048px) {
    padding: 2.5rem 0rem;
    border-radius: 0 0 1.5rem 1.5rem;
  }
`;
