import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import styled from "styled-components";
import { ServiceItem } from "./ServiceItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Services = ({ children, discription }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClicked = (index) => {
    setCurrentIndex(index);
  };
  return (
    <Wrap>
      <ServicesHeading>
        {children}
        <p>{discription}</p>
      </ServicesHeading>
      <ServicesContainer>
        <h3>
          Either Personal <br /> Needs Like
        </h3>
        <CustomArrow
          onClick={() =>
            handleClicked(
              currentIndex === 0
                ? currentIndex + 1
                : currentIndex === ServiceItem.length - 1
                ? 0
                : currentIndex + 1
            )
          }
        >
          <ArrowForwardIcon />
        </CustomArrow>
        <ServicesArray>
          <Swiper
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              280: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              360: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              412: {
                slidesPerView: 2.4,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 2.4,
                spaceBetween: 20,
              },
              560: {
                slidesPerView: 2.7,
                spaceBetween: 20,
              },
              630: {
                slidesPerView: 2.1,
                spaceBetween: 10,
              },
              760: {
                slidesPerView: 2.6,
                spaceBetween: 10,
              },
              930: {
                slidesPerView: 3.2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3.6,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <ServiceItem
                title="Cleaning"
                backgroundColor="#c0bb98"
                discription="Enjoy Quality Cleaning Services with a personal touch. Subscribe to any of our cleaning services to give..."
              >
                <ServiceImg src="/images/cleaning.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceItem
                title="Mobile 
                Chef"
                backgroundColor="#267A96"
                discription="Get the best beauty, cosmetic and personal care. Hire our ..."
              >
                <ServiceImg src="/images/mobile-chef.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceItem
                title="Painting"
                backgroundColor="#FDD365"
                discription="Give your home or office a nice touch and an excellent finish with our professional..."
              >
                <ServiceImg src="/images/painting.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceItem
                title="Make up"
                backgroundColor="#97694D"
                discription="Get the best beauty, cosmetic and personal care. Hire our makeup artists to enhance your facial and..."
              >
                <ServiceImg src="/images/make-up.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
          </Swiper>
        </ServicesArray>
      </ServicesContainer>
      <ServicesContainer>
        <h3>
          0r Business <br /> Needs Like
        </h3>
        <CustomArrow>
          <ArrowForwardIcon />
        </CustomArrow>
        <ServicesArray>
          <Swiper
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              280: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              360: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              412: {
                slidesPerView: 2.4,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 2.4,
                spaceBetween: 20,
              },
              560: {
                slidesPerView: 2.7,
                spaceBetween: 20,
              },
              630: {
                slidesPerView: 2.1,
                spaceBetween: 10,
              },
              760: {
                slidesPerView: 2.6,
                spaceBetween: 10,
              },
              930: {
                slidesPerView: 3.2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3.6,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <ServiceItem
                title="Painting"
                backgroundColor="#FDD365"
                discription="Give your home or office a nice touch and an excellent finish with our professional..."
              >
                <ServiceImg src="/images/painting.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceItem
                title="Cleaning"
                backgroundColor="#c0bb98"
                discription="Enjoy Quality Cleaning Services with a personal touch. Subscribe to any of our cleaning services to give..."
              >
                <ServiceImg src="/images/cleaning.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceItem
                title="Make up"
                backgroundColor="#97694D"
                discription="Get the best beauty, cosmetic and personal care. Hire our makeup artists to enhance your facial and..."
              >
                <ServiceImg src="/images/make-up.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
            <SwiperSlide>
              <ServiceItem
                title="Photoshoot"
                backgroundColor="#60705F"
                discription="Get the best beauty, cosmetic and personal care. Hire our makeup artists to enhance your..."
              >
                <ServiceImg src="/images/photoshoot.png" alt="" />
              </ServiceItem>
            </SwiperSlide>
          </Swiper>
        </ServicesArray>
      </ServicesContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f8fdff;
  padding: 1rem 1.4rem 2.5rem 1.4rem;
  color: #061725;
  overflow: hidden;
  @media (min-width: 790px) {
    padding: 1.5rem 1.4rem 3.5rem 1.4rem;
  }
  @media (min-width: 1100px) {
    gap: 2rem;
  }
`;
const ServicesHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  @media (min-width: 790px) {
    text-align: center;
  }
  @media (min-width: 630px) {
    margin-bottom: 2.5rem;
  }
  @media (min-width: 790px) {
    margin-bottom: 4rem;
  }
  h1 {
    font-size: 1.8rem;
    line-height: 2.2rem;
    letter-spacing: 0.045rem;
    @media (min-width: 413px) {
      max-width: 80%;
    }
    @media (min-width: 425px) {
      line-height: 2.6rem;
      font-size: 2.1rem;
    }
    @media (min-width: 496px) {
      max-width: 86.8%;
      line-height: 3rem;
      font-size: 2.8rem;
    }
    @media (min-width: 683px) {
      max-width: 60.7%;
    }
    @media (min-width: 790px) {
      font-size: 2rem;
      max-width: 100%;
    }
    @media (min-width: 930px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1182px) {
      font-size: 2.8rem;
    }
  }
  p {
    font-size: 0.85rem;
    font-weight: 100;
    line-height: 1.25rem;
    letter-spacing: 0.005rem;
    @media (min-width: 550px) {
      font-size: 1rem;
    }
    @media (min-width: 690px) {
      max-width: 90%;
    }
    @media (min-width: 790px) {
      max-width: 75%;
      margin: auto;
    }
  }
`;
const ServicesContainer = styled.div`
  position: relative;
  box-shadow: 0px 16px 24px 2px rgba(0, 0, 0, 0.14);
  border-radius: 0.75rem;
  color: #ffffff;
  padding: 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  :nth-child(2) {
    background-image: url("/images/servicebg1.png");
  }
  :nth-child(3) {
    margin-top: 2rem;
    background-image: url("/images/servicebg2.png");
    @media (min-width: 930px) {
      background-image: url("/images/servicebg3.png");
    }
  }
  @media (min-width: 630px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
  @media (min-width: 630px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
  h3 {
    letter-spacing: 0.05rem;
    font-size: 1.1rem;
    @media (min-width: 630px) {
      font-size: 1.6rem;
      margin-top: 1.5rem;
      font-weight: 600;
    }
    @media (min-width: 800px) {
      font-size: 1.8rem;
      margin-top: 2.5rem;
    }
  }
`;
const CustomArrow = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 28.3243px 42.4865px 3.54054px rgba(0, 0, 0, 0.14);
  padding: 0.5rem;
  border-radius: 50%;
  color: #1c71b7;
  cursor: pointer;
  position: absolute;
  top: 13%;
  right: -4%;
  @media (min-width: 630px) {
    right: -3%;
  }
  @media (min-width: 800px) {
    right: -2.2%;
  }
  @media (min-width: 1100px) {
    right: -1.5%;
  }
`;
const ServicesArray = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  overflow: hidden;
  @media (min-width: 630px) {
    margin-top: 5rem;
  }
`;
const ServiceImg = styled.img`
  width: 70%;
  z-index: 10;
  @media (min-width: 460px) {
    width: 45%;
  }
  @media (min-width: 630px) {
    width: 35%;
  }
  @media (min-width: 1024px) {
    width: 38%;
  }
`;
