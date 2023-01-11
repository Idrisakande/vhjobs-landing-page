import React from "react";
import styled from "styled-components";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Testimonial = ({ title, discription }) => {
  return (
    <Wrap>
      <TextWrap>
        <Title>{title}</Title>
        <Discription>{discription}</Discription>
        <CurveImg src="/images/curve-arrow.png" alt="" />
      </TextWrap>
      <ImgWrap className="Imgwrap">
        <Swiper
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.7,
              spaceBetween: 5,
            },
            525: {
              slidesPerView: 2.4,
            },
            1024: {
              slidesPerView: 2.7,
              spaceBetween: 6,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 6,
            },
          }}
        >
          <SwiperSlide>
            <Image src="/images/iPhone12Pro.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/iPhone12Pro.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/iPhone12Pro.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </ImgWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  background: #061725;
  padding: 4rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media (min-width: 768px) {
    flex-basis: 100%;
    flex-direction: row;
    padding: 0 0.85rem;
    padding-top: 8rem;
    padding-bottom: 4rem;
    gap: 0;
  }
`;
const TextWrap = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  @media (min-width: 768px) {
    flex-basis: 47%;
    margin-top: 3rem;
  }
  @media (min-width: 1024px) {
    flex-basis: 40%;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  @media (min-width: 630px) {
    font-size: 2.2rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    font-weight: 800;
  }
  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;
const Discription = styled.div`
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.25rem;
  @media (min-width: 525px) {
    max-width: 85%;
  }
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 1rem;
    max-width: 90%;
  }
`;
const CurveImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    padding-left: 2rem;
    object-fit: contain;
    margin-top: 1rem;
  }
  @media (min-width: 1024px) {
    padding-left: 3rem;
    width: 20rem;
  }
`;
const ImgWrap = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  @media (min-width: 768px) {
    flex-basis: 53%;
  }
  @media (min-width: 1024px) {
    flex-basis: 60%;
  }
`;
const Image = styled.img`
  object=fit: contain;
  max-width: 90%;
  :nth-child(1) {
    margin-right: 1.3rem;
  }
  :nth-child(2) {
    margin-right: 1.3rem;
  }
  @media (min-width: 525px) {
    max-width: 80%;
  }
  @media (min-width: 1250px) {
    width: 100%;
  }
`;
