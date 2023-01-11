import React, { useState } from "react";
import styled from "styled-components";
import "./FrequentlyAsked.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Can I subcribe me than one package at once? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada odo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada ",
  },
  {
    question: "Can I subcribe me than one package at once? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada odo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada ",
  },
  {
    question: "Can I subcribe me than one package at once? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada odo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada ",
  },
  {
    question: "Can I subcribe me than one package at once? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada odo, consectetur in nunc mauris eget dignissim tempus nec. Malesuada ",
  },
];

export const FrequentlyAsked = ({ title, text, link }) => {
  const [clicked, setClicked] = useState(null);
  const handleClicked = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <Container>
      <Headding>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Headding>
      <QuestionsContainer>
        {faqs.map((item, index) => (
          <Wrap key={index}>
            <TitleHead
              className={clicked === index ? "faq show" : "faq"}
              onClick={() => handleClicked(index)}
            >
              <Question>{item.question}</Question>
              {clicked === index ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </TitleHead>
            <Answer className={clicked === index ? "answer show" : "answer"}>
              {item.answer}
            </Answer>
          </Wrap>
        ))}
      </QuestionsContainer>
      <QuestionLink>
        <Link>{link}</Link>
      </QuestionLink>
    </Container>
  );
};

const Container = styled.div`
  color: #061725;
  display: flex;
  flex-direction: column;
  padding: 3rem 0.7rem;
  background-color: #f8fdff;
  gap: 3rem;
  @media (min-width: 768px) {
    padding: 3.5rem 0.7rem;
  }
  @media (min-width: 1200px) {
    padding: 5rem 0.7rem;
    margin: auto;
  }
`;
const Headding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  @media (min-width: 500px) {
    text-align: center;
  }
`;
const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  @media (min-width: 500px) {
    font-size: 2.1rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
`;
const Text = styled.div`
  display: none;
  font-size: 0.95rem;
  font-weight: 500;
  @media (min-width: 500px) {
    display: block;
    font-size: 0.9rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 930px) {
    width: 930px;
    margin: auto;
  }
`;
const Wrap = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08), 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;
const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const Question = styled.div`
  font-weight: 600;
  font-size: 0.96rem;
  line-height: 19px;
  max-width: 75%;
  @media (min-width: 425px) {
    max-width: 60%;
  }
`;
const Answer = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 18px;
  transition: all 0.5s;
`;
const QuestionLink = styled.div`
  display: flex;
  justify-content: center;
`;
const Link = styled.a`
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  color: #1c71b7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid #1c71b7;
  transition: 0.4s;
  :hover {
    color: #ffffff;
    background: #1c71b7;
  }
`;
