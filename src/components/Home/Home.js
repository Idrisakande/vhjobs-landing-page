import React from "react";
import styled from "styled-components";
import { About } from "./About/About";
import { AppDetails } from "./App/AppDetails";
import { Explore } from "./Explore/Explore";
import { Footer } from "./Footer/Footer";
import { Hero } from "./Hero/Hero";
import { NeedSteps } from "./NeedSteps/NeedSteps";
import { Offer } from "./Offer/Offer";
import { Packages } from "./Packages/Packages";
import { FrequentlyAsked } from "./Questions/FrequentlyAsked";
import { Reasons } from "./Reasons/Reasons";
import { Services } from "./Services/Services";
import { Skill } from "./Skill/Skill";
import { Testimonial } from "./Testimonial/Testimonial";

export const Home = () => {
  return (
    <Container>
      <Hero paragraph="Professional and affordable services at your fingertips">
        <h1>
          Hire The Right Professional For Your <span>Business Needs</span>
        </h1>
      </Hero>
      <About
        discription="Vhjobs is a platform created for individuals and Businesses
      looking for people to help them handle their tasks. Vhjobs
      connects these individuals/Businesses with skilled Professionals
      that are closest to them. Why stress when vhjobs is here."
        buttonText="Tell us what you need to get done"
      >
        <h1>
          Have a need to get <span>done</span>?
        </h1>
      </About>
      <NeedSteps discription="Get you needs done with three simple steps">
        <h1>
          <span>Easiest way</span> to get your <span>needs done</span>
        </h1>
      </NeedSteps>
      <Wrap>
        <Services discription="Join thousands of individuals and businesses who trust vhjobs to help them handle their needs.">
          <h1>
            Why stress when <span>vhjobs</span> is here!
          </h1>
        </Services>
      </Wrap>
      <Packages discription="Services are perfect when they are bundled">
        <h1>
          Get more <span>needs done</span> for less
        </h1>
      </Packages>
      <Skill
        title="Make money with vhjobs"
        discription="Join other 5,000 people that are selling their skill and earn handsomely"
        buttonText="Sign up to earn "
      />
      <AppDetails
        title="Download Vhjobs app"
        discription="Scan the QR code below with your phone camera to download the Vhjobs app."
      />
      <Wrap>
        <Reasons discription="Top reasons vhjobs should handle your needs">
          <h1>
            Still not yet <span>convinced</span>?
          </h1>
        </Reasons>
      </Wrap>
      <Testimonial
        title="What people saying"
        discription="In simple term, we connnect people with skilled professionals for their Personal and Business needs"
      />
      <FrequentlyAsked
        title="Frequently Asked Questions"
        text="Join thousands of individuals and businesses who trust vhjobs to help them handle their needs."
        link="Visit FAQ"
      />
      <Explore
        title="Ready to get your need done?"
        buttonText="Explore needs"
      />
      <Offer
        discount="Get 10% discount on your first purchase"
        buttonText1="Sign up to claim"
        buttonText2="Learn more"
      />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f8fdff;
  span {
    color: #1c71b7;
  }
`;
const Wrap = styled.div`
  overflow: hidden;
  span {
    color: #ff00ff;
  }
`;
