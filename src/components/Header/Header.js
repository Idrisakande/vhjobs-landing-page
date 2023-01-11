import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { SignIn } from "./SignIn";
import { Store } from "./Store";

export const Header = ({ leftBtnText, rightBtnText, text }) => {
  const [burgerState, setBurgerState] = useState(false);
  const companies = [
    "About Us",
    "Trust & Safety",
    "Terms & Conditions",
    "Blog",
    "Privacy Policy",
  ];
  return (
    <Nav>
      <LeftNavMenu>
        <a>
          <LogoImg src="/images/Logo.png" alt="" />
        </a>
      </LeftNavMenu>
      <RightNavMenu>
        <p>{text}</p>
        <SignIn name="Sign In" />
        <CustomMenu onClick={() => setBurgerState(true)}>
          <span></span>
          <span></span>
          <span></span>
        </CustomMenu>
      </RightNavMenu>
      <BurgerNav show={burgerState}>
        <Headers>
          <a>
            <LogoImg src="/images/Logo.png" alt="" />
          </a>
          <CustomClose onClick={() => setBurgerState(false)} />
        </Headers>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <Lists>
          <LeftLists>
            <Title>Trending Needs</Title>
            <li>
              <a>
                <NeedImg src="/images/make-up1.png" alt="" />
                <Need>Make up</Need>
              </a>
            </li>
            <li>
              <a>
                <NeedImg src="/images/cleaning1.png" alt="" />
                <Need>Cleaning</Need>
              </a>
            </li>
            <li>
              <a>
                <NeedImg src="/images/photoshoot1.png" alt="" />
                <Need>Photoshoot</Need>
              </a>
            </li>
            <li>
              <a>
                <NeedImg src="/images/mobile-chef1.png" alt="" />
                <Need>Mobile Chef</Need>
              </a>
            </li>
            <li>
              <a>
                <NeedImg src="/images/painting1.png" alt="" />
                <Need>Painter</Need>
              </a>
            </li>
            <li>
              <a>
                <NeedImg src="/images/cleaning1.png" alt="" />
                <Need>Web development</Need>
              </a>
            </li>
          </LeftLists>
          <RightLists>
            <Company>
              <Title>Company</Title>
              {companies &&
                companies.map((Company, index) => (
                  <li key={index}>
                    <a>{Company}</a>
                  </li>
                ))}
            </Company>
            <Contact>
              <Title>Contact Us</Title>
              <Wrap>
                <a>
                  <ContactImg src="/images/phone.png" alt="" />
                </a>
                <a>
                  <ContactImg src="/images/whatsapp.png" alt="" />
                </a>
                <a>
                  <ContactImg src="/images/email.png" alt="" />
                </a>
              </Wrap>
            </Contact>
          </RightLists>
        </Lists>
        <ButtonText>{text}</ButtonText>
        <Stores>
          <a>
            <Store download="Download App" name="Play store">
              <StoreImg src="/images/Playstore.png" alt="" />
            </Store>
          </a>
          <a>
            <Store download="Download App" name="Apple store">
              <StoreImg src="/images/Applestore.png" alt="" />
            </Store>
          </a>
        </Stores>
      </BurgerNav>
    </Nav>
  );
};

const Nav = styled.div`
  height: 3.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #ffffff;
  @media (min-width: 630px) {
    padding: 0 3rem;
  }
`;
const LeftNavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;
const LogoImg = styled.img`
  width: 6rem;
  display: flex;
  align-items: center;
`;

const RightNavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  p {
    display: none;
    margin-right: 1.5rem;
    @media (min-width: 630px) {
      display: flex;
    }
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CustomMenu = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  @media (min-width: 630px) {
    display: none;
  }
  span {
    display: flex;
    width: 1.2rem;
    height: 2px;
    background: #1c71b7;
    :nth-child(2) {
      margin-top: 0.188rem;
    }
    :nth-child(3) {
      margin-top: 0.2rem;
    }
  }
`;
const BurgerNav = styled.div`
  background-color: #f8fdff;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: start;
  padding: 1rem;
  overflow: auto;
  transition: 0.4s;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-150%)")};
`;
const Headers = styled.header`
  display: flex;
  justify-content: space-between;
`;
const CustomClose = styled(CloseIcon)`
  display: flex;
  cursor: pointer;
  color: #1c71b7;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
`;
const LeftButton = styled.div`
  height: 2.5rem;
  width: 9rem;
  color: #fff;
  background-color: #1c71b7;
  border: 1px solid #1c71b7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background: transparent;
    border: 1px solid #1c71b7;
    color: #1c71b7;
  }
`;
const RightButton = styled(LeftButton)`
  background: transparent;
  border: 1px solid #061725;
  color: #061725;
  :hover {
    border: 1px solid #1c71b7;
    color: #1c71b7;
  }
`;
const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  letter-spacing: 0.01rem;
  font-weight: 600;
`;
const LeftLists = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  li {
    a {
      color: #061725;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        color: #1c71b7;
        text-decoration: underline;
      }
    }
  }
`;
const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #1c71b7;
`;
const NeedImg = styled.img`
  width: 2rem;
`;
const Need = styled.div`
  margin-left: 0.7rem;
`;
const RightLists = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  padding-left: 3rem;
`;
const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  li {
    a {
      color: #061725;
      transition: 0.3s;
      cursor: pointer;
      :hover {
        color: #1c71b7;
        text-decoration: underline;
      }
    }
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  a {
    display: flex;
    border: 1px solid #061725;
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      border: 1px solid #1c71b7;
    }
  }
`;
const ContactImg = styled.img`
  width: 1.1rem;
  height: 1.1rem;
`;
const ButtonText = styled.div`
  border-radius: 1.5rem;
  border: 1px solid #1c71b7;
  padding: 1.5rem 0;
  height: 2.5rem;
  color: #1c71b7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04rem;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    background: #1c71b7;
    border-color: #1c71b7;
    color: #ffffff;
  }
`;
const Stores = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  a {
    color: #061725;
  }
`;
const StoreImg = styled.img`
  width: 1.3rem;
  object-fit: contain;
`;
