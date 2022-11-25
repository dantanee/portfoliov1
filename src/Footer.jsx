import React from 'react';
import styled from 'styled-components';
import WhatsApp from './assets/WhatsApp.svg';
import EnvelopeClosed from './assets/Envelope Closed.svg';
import LinkedIn from './assets/LinkedIn.svg';

const Footer = () => {
  return (
    <Wrapper>
      <TextSection>
        <p>Got a project?</p>
        <Heading1>LET'S TALK</Heading1>
      </TextSection>
      <ContactSection>
        <Info>
          <img src={WhatsApp} alt="" />
          <Span>+2348161558686</Span>
        </Info>
        <Info>
          <img src={LinkedIn} alt="" />
          <Span>yasir salis</Span>
        </Info>
        <Info>
          <img src={EnvelopeClosed} alt="" />
          <Span>sayasir557@gmail.com</Span>
        </Info>
      </ContactSection>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-bottom: 256px;
  @media (max-width: 550px) {
    padding-bottom: 100px;
  }
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  & p {
    color: #b8c2a9;
  }
`;
const Heading1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #b8c2a9;
  @media (max-width: 550px) {
    font-size: 48px;
  }
`;
const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;
const Info = styled.div`
  display: flex;
  gap: 8px;
`;
const Span = styled.span`
  color: #b8c2a9;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 18px;
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
export default Footer;
