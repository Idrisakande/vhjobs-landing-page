import React from "react";
import styled from "styled-components";

export const AppDetails = ({ title, discription }) => {
  return (
    <Container>
      <LeftApp>
        <Title>{title}</Title>
        <Paragragh>{discription}</Paragragh>
        <QrImg src="/images/qr-code.png" alt="" />
      </LeftApp>
      <RightApp>
        <AppImg src="/images/iPhone13Pro1.png" alt="" />
        <a>
          <AppLink1>
            <Image src="/images/applestore1.png" alt="" />
            <Text>Apple store</Text>
          </AppLink1>
        </a>
        <a>
          <AppLink2>
            <Image src="/images/playstore.png" alt="" />
            <Text>Google Play</Text>
          </AppLink2>
        </a>
      </RightApp>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #ddf0ff;
  box-shadow: 0px 16px 24px 2px rgba(0, 0, 0, 0.14);
  border-radius: 0.6rem;
  margin: 0 0.7rem;
  margin-bottom: 2rem;
  padding: 1.5rem 1.5rem;
  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0rem;
    padding: 3rem 0.8rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem 0.8rem;
  }
`;
const LeftApp = styled.div`
  display: flex;
  padding-top: 2rem;
  text-align: center;
  justify-content: center;
  @media (min-width: 800px) {
    flex-basis: 50%;
    flex-direction: column;
    text-align: start;
    gap: 1rem;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 32px;
  width: 10rem;
  @media (min-width: 425px) {
    font-size: 2rem;
    width: 15rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
    width: 25rem;
    line-height: 2.5rem;
  }
`;
const Paragragh = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    font-size: 0.95rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
const QrImg = styled.img`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    width: 40%;
    background: #f5f5f5;
    margin-top: 3rem;
  }
  @media (min-width: 1200px) {
    width: 35%;
  }
`;
const RightApp = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  @media (min-width: 800px) {
    flex-basis: 50%;
  }
`;
const AppImg = styled.img`
  width: 85%;
  margin: auto;
  @media (min-width: 425px) {
    width: 80%;
  }
  @media (min-width: 675px) {
    width: 70%;
  }
`;
const AppLink1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  width: 10rem;
  height: 3rem;
  background: #1c71b7;
  border-radius: 1.5rem;
  position: absolute;
  bottom: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 425px) {
    bottom: 16%;
  }
  @media (min-width: 540px) {
    bottom: 14%;
  }
  @media (min-width: 630px) {
    bottom: 11.5%;
  }
  @media (min-width: 800px) {
    bottom: 16%;
  }
  @media (min-width: 1024px) {
    bottom: 14%;
  }
  @media (min-width: 1200px) {
    bottom: 12%;
  }
`;

const Image = styled.img`
  width: 10%;
`;

const Text = styled.div`
  margin-left: 0.6rem;
`;
const AppLink2 = styled(AppLink1)`
  bottom: 0%;
`;
