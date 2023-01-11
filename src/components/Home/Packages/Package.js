import React from "react";
import styled from "styled-components";
// import CheckIcon from "@mui/icons-material/Check";

export const Package = ({
  discount,
  pakage1,
  pakage2,
  pakage3,
  pakage4,
  price1,
  price2,
  bottonText1,
  bottonText2,
  bottonText3,
  packageItem1,
  packageItem2,
  packageItem3,
  packageItem4,
  packageItem5,
  packageItem6,
}) => {
  return (
    <Wrap>
      <Discount>{discount}</Discount>
      <PackageContainer>
        <PackageTitles>
          <PackageTitle>{pakage1}</PackageTitle>
          <PackageTitle>{pakage2}</PackageTitle>
          {pakage3 && <PackageTitle>{pakage3}</PackageTitle>}
          {pakage4 && <PackageTitle>{pakage4}</PackageTitle>}
        </PackageTitles>
        <Prices>
          <Price1>{price1}</Price1>
          <Price2>{price2}</Price2>
        </Prices>
        <LinkButton>
          <FirstLink>{bottonText1}</FirstLink>
          <SecondLink>{bottonText2}</SecondLink>
        </LinkButton>
        <Items>
          <Item>
            <MarkImg src="/images/mark.png" alt="" />
            <strong>{packageItem1}</strong>
          </Item>
          <Item>
            <MarkImg src="/images/mark.png" alt="" />
            <p>{packageItem2}</p>
          </Item>
          <Item>
            <MarkImg src="/images/mark.png" alt="" />
            <p>{packageItem3}</p>
          </Item>
          <Item>
            <MarkImg src="/images/mark.png" alt="" />
            <p>{packageItem4}</p>
          </Item>
          <Item>
            <MarkImg src="/images/mark.png" alt="" />
            <p>{packageItem5}</p>
          </Item>
          <Item>
            <MarkImg src="/images/mark.png" alt="" />
            <p>{packageItem6}</p>
          </Item>
        </Items>
        <ButtomLink>{bottonText3}</ButtomLink>
      </PackageContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 1.5px solid #1c71b7;
  border-radius: 0.6rem;
  position: relative;
  overflow: hidden;
  max-width: 16rem;
  @media (min-width: 1024px) {
    max-width: 18.5rem;
  }
`;
const Discount = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #079300;
  color: #ffffff;
  padding: 0.3rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  // border: 1.5px solid #1c71b7;
  // overflow: hidden;
`;
const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 3rem;
  padding: 0.7rem 0.9rem;
`;
const PackageTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  height: 8rem;
`;
const PackageTitle = styled.div`
  color: #ffffff;
  padding: 0.5rem 0.7rem;
  font-size: 0.7rem;
  border-radius: 0.4rem;
  background: linear-gradient(273.36deg, #09263d 0%, #1c71b7 100%);
`;
const Prices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
`;
const Price1 = styled.div`
  font-size: 1rem;
  margin-right: 0.55rem;
  background: linear-gradient(273.36deg, #09263d 0%, #1c71b7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.105rem;
    top: 55%;
    left: 0;
    background: linear-gradient(273.36deg, #09263d 0%, #1c71b7 100%);
  }
`;
const Price2 = styled.div`
  font-size: 1.45rem;
  background: linear-gradient(273.36deg, #09263d 0%, #1c71b7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const LinkButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const FirstLink = styled.button`
  display: block;
  text-align: center;
  padding: 0.6rem 0;
  border-radius: 0.9rem;
  color: #ffffff;
  font-size: 0.71rem;
  letter-spacing: 0.04rem;
  cursor: pointer;
  font-weight: 700;
  background-color: #1c71b7;
  border: none;
  :hover {
    background-color: transparent;
    color: #1c71b7;
  }
`;
const SecondLink = styled.button`
  display: block;
  text-align: center;
  padding: 0.6rem 0;
  border-radius: 0.9rem;
  color: #1c71b7;
  font-weight: 700;
  font-size: 0.71rem;
  letter-spacing: 0.04rem;
  background-color: transparent;
  border: 1px solid #1c71b7;
  cursor: pointer;
  :hover {
    // background-color: #1c71b7;
    color: #1c71b7;
  }
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.73rem;
  color: #061725;
  margin-top: 0.6rem;
`;
const Item = styled.div`
  display: flex;
  letter-spacing: 0.03rem;
  width: 12.5rem;
  strong {
    font-weight: 900;
    font-size: 0.79rem;
    // transform: matrix(1, 0, 0, 1, 0, 0);
  }
  P {
    // font-size: 0.73rem;
  }
`;
const MarkImg = styled.img`
  margin-right: 0.6rem;
  width: 0.7rem;
  object-fit: contain;
`;
const ButtomLink = styled.button`
  display: block;
  text-align: center;
  padding: 0.6rem 0;
  border-radius: 0.9rem;
  color: #1c71b7;
  background-color: transparent;
  font-weight: 700;
  font-size: 0.71rem;
  letter-spacing: 0.04rem;
  cursor: pointer;
  border: none;
`;
