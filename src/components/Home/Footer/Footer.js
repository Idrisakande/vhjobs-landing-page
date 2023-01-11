import React from "react";
import styled from "styled-components";
import { FooterStore } from "./FooterStore";

export const Footer = () => {
  const needs = [
    "Make up",
    "Cleaning",
    "Photoshoot",
    "Mobile chef",
    "Painter",
    "Web development",
  ];
  const companies = [
    "About Us",
    "Trust & Safety",
    "Terms & Conditions",
    "Privacy Policy",
    "Pricing",
    "Payment Protection",
  ];
  const contacts = [
    "FAQ",
    "Privacy Policy",
    "Customer Support",
    "Payment Protection",
  ];
  return (
    <Wrap>
      <Container1>
        <Footer1>
          <FooterLinks1>
            <FooterHeading>Popular Needs</FooterHeading>
            <Links>
              {needs &&
                needs.map((need, index) => (
                  <li key={index}>
                    <a>{need}</a>
                  </li>
                ))}
            </Links>
          </FooterLinks1>
          <FooterLinks2>
            <FooterHeading>Company</FooterHeading>
            <Links>
              {companies &&
                companies.map((Company, index) => (
                  <li key={index}>
                    <a>{Company}</a>
                  </li>
                ))}
            </Links>
          </FooterLinks2>
          <FooterLinks3>
            <FooterHeading>Contact</FooterHeading>
            <Links>
              {contacts &&
                contacts.map((contact, index) => (
                  <li key={index}>
                    <a>{contact}</a>
                  </li>
                ))}
            </Links>
          </FooterLinks3>
        </Footer1>
        <HorizontalLine1>
          <hr />
        </HorizontalLine1>
        <Footer2>
          <WebStore>
            <Title>Get our app</Title>
            <Stores>
              <FooterStore download="Download App" name="Play store">
                <StoreImg src="/images/Playstore.png" alt="" />
              </FooterStore>
              <FooterStore download="Download App" name="Apple store">
                <StoreImg src="/images/Applestore1.png" alt="" />
              </FooterStore>
            </Stores>
          </WebStore>
          <HorizontalLine2>
            <hr />
          </HorizontalLine2>
          <SocialLinks>
            <Title>Follow us</Title>
            <SocialArray>
              <Circle>
                <SocialImg src="/images/facebook.png" alt="" />
              </Circle>
              <Circle>
                <SocialImg src="/images/twitter.png" alt="" />
              </Circle>
              <Circle>
                <SocialImg src="/images/linkdin.png" alt="" />
              </Circle>
              <Circle>
                <SocialImg src="/images/youtube.png" alt="" />
              </Circle>
              <Circle>
                <SocialImg src="/images/instagram.png" alt="" />
              </Circle>
            </SocialArray>
          </SocialLinks>
        </Footer2>
      </Container1>
      <HorizontalLine3>
        <hr />
      </HorizontalLine3>
      <Container2>
        <Footer3>
          <BottomLinks>Vhjobs</BottomLinks>
          <Country>
            <CountryImg src="/images/nigeria.png" alt="" />
            <CountryText>Country: NG | Currency: NGN</CountryText>
            <DownImg src="/images/down-arrow.png" alt="" />
          </Country>
        </Footer3>
        <BottomText>© 2022. Vhjobs services limited</BottomText>
      </Container2>
    </Wrap>
  );
};

const Wrap = styled.div`
  background: #061725;
  color: #ffffff;
  padding: 2rem 1rem;
  @media (min-width: 425px) {
    padding: 3rem 1rem;
  }
  @media (min-width: 630px) {
    padding: 4rem 1rem;
  }
`;
const Container1 = styled.div`
  @media (min-width: 1024px) {
    max-width: 1150px;
    margin: auto;
  }
`;
const Footer1 = styled.div`
  padding-bottom: 1.5rem;
  letter-spacing: 0.03rem;
  @media (min-width: 448px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 100%;
    font-size: 0.9rem;
  }
  @media (min-width: 630px) {
    padding-bottom: 2.5rem;
  }
`;
const FooterLinks1 = styled.div`
  @media (min-width: 448px) {
    flex-basis: 50%;
  }
  @media (min-width: 630px) {
    flex-basis: 33.3%;
  }
`;
const FooterLinks2 = styled.div`
  @media (min-width: 448px) {
    flex-basis: 50%;
  }
  @media (min-width: 630px) {
    flex-basis: 33.3%;
  }
`;
const FooterLinks3 = styled.div`
  @media (min-width: 425px) {
    flex-basis: 40%;
    padding: 1rem 0;
  }
  @media (min-width: 630px) {
    flex-basis: 33.3%;
    padding: 0;
  }
`;
const FooterHeading = styled.div`
  font-weight: 800;
  font-size: 1rem;
  margin-top: 1.1rem;
  @media (min-width: 425px) {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
const Links = styled.div`
  li {
    margin-top: 0.6rem;
    a {
      color: #ffffff;
      font-size: 0.8rem;
      transition: 0.4s;
      cursor: pointer;
      :hover {
        text-decoration: underline;
        color: #1c71b7;
      }
    }
  }
`;
const HorizontalLine1 = styled.div`
  border: none;
  background: #f4f4f4;
`;
const Footer2 = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;
  }
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 1rem;
  margin: 1.4rem 0;
  @media (min-width: 425px) {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;
const WebStore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-bottom: 1.5rem;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;
const Stores = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    color: #ffffff;
  }
  @media (min-width: 425px) {
    flex-direction: row;
  }
`;
const StoreImg = styled.img`
  width: 15%;
`;
const HorizontalLine2 = styled(HorizontalLine1)`
  @media (min-width: 768px) {
    display: none;
  }
`;
const SocialLinks = styled.div`
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;
const SocialArray = styled.div`
  display: flex;
  margin-bottom: 1.3rem;
`;
const Circle = styled.a`
  margin-right: 1rem;
  border: 1px solid #ffffff;
  padding: 0.5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #f0f0f0;
  }
`;
const SocialImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
`;
const HorizontalLine3 = styled(HorizontalLine1)`
  border: none;
  background: #f4f4f4;
  @media (min-width: 1024px) {
    max-width: 1150px;
    margin: auto;
  }
`;
const Container2 = styled.div`
  padding-top: 2.5rem;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    max-width: 1150px;
    margin: auto;
  }
`;
const Footer3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-basis: 50%;
    flex-direction: column;
    row-gap: 0.5rem;
  }
`;
const BottomLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
const BottomText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    flex-basis: 50%;
    margin-top: 0rem;
  }
`;
const Country = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0;
  background: #65656570;
  border-radius: 5px;
  width: 14rem;
`;
const CountryImg = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;
const CountryText = styled.div`
  font-size: 0.7rem;
`;
const DownImg = styled.img`
  width: 0.5rem;
  margin-left: 0.5rem;
`;
