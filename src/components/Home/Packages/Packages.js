import React from "react";
import styled from "styled-components";
import { Package } from "./Package";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Packages = ({ children, discription }) => {
  return (
    <Wrap>
      <PackagesHeading>
        {children}
        <p>{discription}</p>
      </PackagesHeading>
      <PackagesArray>
        <Swiper
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            295: {
              slidesPerView: 1.05,
              spaceBetween: 1,
            },
            330: {
              slidesPerView: 1.15,
              spaceBetween: 6,
            },
            370: {
              slidesPerView: 1.25,
              spaceBetween: 6,
            },
            400: {
              slidesPerView: 1.4,
              spaceBetween: 6,
            },
            465: {
              slidesPerView: 1.62,
              spaceBetween: 6,
            },
            570: {
              slidesPerView: 2.05,
              spaceBetween: 6,
            },
            680: {
              slidesPerView: 2.4,
              spaceBetween: 6,
            },
            820: {
              slidesPerView: 2.95,
              spaceBetween: 6,
            },
            1024: {
              slidesPerView: 3.25,
              spaceBetween: 6,
            },
            1200: {
              slidesPerView: 3.7,
              spaceBetween: 6,
            },
            1360: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
          }}
        >
          <SwiperSlide>
            <Package
              discount="5% off"
              pakage1="Logo Desiging"
              pakage2="UI/UX Desiging"
              pakage3="Graphic Desiging"
              pakage4="Website Development"
              price1="N8,500"
              price2="N6,500"
              bottonText1="Get Started"
              bottonText2="Learn more"
              packageItem1="Three times cleaning"
              packageItem2="Professional light cleaning"
              packageItem3="Ironing of up to 10 clothes on each visit"
              packageItem4="Washing of dishes"
              packageItem5="Laying of beds"
              packageItem6="Cleaning of 1 living room, 1 bedroom, a kitchen and 2 toilets"
              bottonText3="See more features"
            ></Package>
          </SwiperSlide>
          <SwiperSlide>
            <Package
              discount="5% off"
              pakage1="Logo Desiging"
              pakage2="UI/UX Desiging"
              pakage3="Website Development"
              price1="N8,500"
              price2="N6,500"
              bottonText1="Get Started"
              bottonText2="Learn more"
              packageItem1="Three times cleaning"
              packageItem2="Professional light cleaning"
              packageItem3="Ironing of up to 10 clothes on each visit"
              packageItem4="Washing of dishes"
              packageItem5="Laying of beds"
              packageItem6="Cleaning of 1 living room, 1 bedroom, a kitchen and 2 toilets"
              bottonText3="See more features"
            ></Package>
          </SwiperSlide>
          <SwiperSlide>
            <Package
              discount="5% off"
              pakage1="Logo Desiging"
              pakage2="UI/UX Desiging"
              price1="N8,500"
              price2="N6,500"
              bottonText1="Get Started"
              bottonText2="Learn more"
              packageItem1="Three times cleaning"
              packageItem2="Professional light cleaning"
              packageItem3="Ironing of up to 10 clothes on each visit"
              packageItem4="Washing of dishes"
              packageItem5="Laying of beds"
              packageItem6="Cleaning of 1 living room, 1 bedroom, a kitchen and 2 toilets"
              bottonText3="See more features"
            ></Package>
          </SwiperSlide>
          <SwiperSlide>
            <Package
              discount="5% off"
              pakage1="Logo Desiging"
              pakage2="UI/UX Desiging"
              price1="N8,500"
              price2="N6,500"
              bottonText1="Get Started"
              bottonText2="Learn more"
              packageItem1="Three times cleaning"
              packageItem2="Professional light cleaning"
              packageItem3="Ironing of up to 10 clothes on each visit"
              packageItem4="Washing of dishes"
              packageItem5="Laying of beds"
              packageItem6="Cleaning of 1 living room, 1 bedroom, a kitchen and 2 toilets"
              bottonText3="See more features"
            ></Package>
          </SwiperSlide>
        </Swiper>
      </PackagesArray>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem 2rem 1.5rem;
  background-color: #f8fdff;
  gap: 2rem;
  width: 100%;
`;
const PackagesHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
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
    @media (min-width: 374px) {
      max-width: 75%;
      margin: auto;
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
    @media (min-width: 609px) {
      max-width: 64.1%;
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
const PackagesArray = styled.div`
  display: flex;
`;
