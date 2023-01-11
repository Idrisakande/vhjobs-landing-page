import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import ServiceButton from "./ServiceButton";

export const Hero = ({ children, paragraph }) => {
  return (
    <Container>
      <HeroImg>
        <FadeBottom />
      </HeroImg>
      <HeroArea>
        <Title>{children}</Title>
        <Paragraph>{paragraph}</Paragraph>
        <SearchArea>
          <SearchImg src="/images/search.png" />
          <input type="search" placeholder="What do you need to get done?" />
          <SearchButton>Search</SearchButton>
        </SearchArea>
        <ServicesArea>
          <strong>Popular needs :</strong>
          <ServicesBtns>
            <ServiceButton value="Clearning" />
            <ServiceButton value="Fumigation" />
            <ServiceButton value="Mobile chef" />
            <ServiceButton value="Make up" />
            <a>See more</a>
          </ServicesBtns>
        </ServicesArea>
        <Trust>
          <h2>
            Trusted By<strong>:</strong>
          </h2>
        </Trust>
        <Boxs>
          <Box />
          <Box />
          <Box />
        </Boxs>
      </HeroArea>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  @media (min-width: 630px) {
    position: relative;
  }
`;
const HeroImg = styled.div`
  background-image: url("/images/hero1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 24.6rem;
  @media (min-width: 630px) {
    height: 40rem;
    position: relative;
  }
  @media (min-width: 768px) {
    height: 43.5rem;
  }
  @media (min-width: 1024px) {
    height: 50rem;
  }
  @media (min-width: 1100px) {
    height: 52rem;
  }
`;
const FadeBottom = styled.div`
  @media (min-width: 630px) {
    height: 60rem;
    width: 100%;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.2),
      #111
    );
    position: absolute;
    bottom: 0%;
  }
`;
const HeroArea = styled.div`
  width: 100%;
  background: #061725;
  color: #fff;
  padding: 0 1rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  @media (min-width: 630px) {
    align-items: center;
    text-align: center;
    position: absolute;
    background: none;
    width: 100%;
    bottom: 0%;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.07rem;
  line-height: 2.5rem;
  @media (min-width: 630px) {
    font-size: 1.2rem;
    line-height: 3rem;
  }
  @media (min-width: 760px) {
    font-size: 1.3rem;
    line-height: 3.2rem;
  }
  @media (min-width: 816px) {
    max-width: 85.9%;
  }
  @media (min-width: 930px) {
    font-size: 1.4rem;
    line-height: 3.5rem;
  }
  @media (min-width: 1007px) {
    max-width: 73.8%;
  }
  @media (min-width: 1164px) {
    max-width: 63.4%;
  }
`;
const Paragraph = styled.div`
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.045rem;
  @media (min-width: 630px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;
const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0.2rem;
  border-radius: 0.4rem;
  margin-top: 0.3rem;
  width: 100%;
  input {
    border: none;
    flex: 1;
    padding: 0.9rem 0.3rem;
    font-size: 0.9rem;
    color: #061725;
    :focus {
      outline: none;
    }
  }
  @media (min-width: 630px) {
    max-width: 80%;
  }
  @media (min-width: 1100px) {
    max-width: 73%;
  }
`;
const SearchImg = styled.img`
  width: 1.6rem;
  object-fit: contain;
  padding-left: 0.5rem;
`;
const SearchButton = styled.div`
  background: #1c71b7;
  border-radius: 0.25rem;
  width: 8rem;
  height: 2.5rem;
  display: none;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.04rem;
  font-size: 0.95rem;
  @media (min-width: 630px) {
    display: flex;
  }
`;
const ServicesArea = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: start;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  strong {
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.04rem;
    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  }
  @media (min-width: 630px) {
    flex-direction: row;
    align-items: center;
  }
`;
const ServicesBtns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  column-gap: 0.25rem;
  row-gap: 0.5rem;
  a {
    color: #1c71b7;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.045rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 375px) {
    grid-template-columns: repeat(4, 2fr);
  }
  @media (min-width: 425px) {
    column-gap: 0.5rem;
  }
  @media (min-width: 630px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const Trust = styled.div`
  position: relative;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  letter-spacing: 0.05rem;
  @media (min-width: 375px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  @media (min-width: 630px) {
    font-size: 1.2rem;
    margin: 1.5rem 0;
    letter-spacing: 0.09rem;
    strong {
      display: none;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
  @media (min-width: 1100px) {
    font-size: 1.7rem;
    margin-bottom: 5rem;
    margin-top: 2rem;
  }
`;
const Boxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  position: absolute;
  bottom: -6.5%;
  left: 50%;
  width: 95%;
  margin: auto;
  transform: translate(-50%, -50%);
  @media (min-width: 375px) {
    bottom: -9.7%;
  }
  @media (min-width: 486px) {
    bottom: -15%;
  }
  @media (min-width: 630px) {
    bottom: -15%;
    width: 80%;
  }
  @media (min-width: 768px) {
    bottom: -17.5%;
  }
  @media (min-width: 1024px) {
    bottom: -22.5%;
  }
  @media (min-width: 1100px) {
    bottom: -24%;
  }
`;
