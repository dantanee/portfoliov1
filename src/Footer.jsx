import React from 'react';
import styled from 'styled-components';
import WhatsApp from './assets/whatsappicon.svg';
import EnvelopeClosed from './assets/envelope.svg';
import LinkedIn from './assets/linkedin.svg';

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
          <Span>
            <a href="https://www.linkedin.com/in/yasir-salis-91a920253/">
              yasirsalis
            </a>
          </Span>
        </Info>
        <Info>
          <img src={EnvelopeClosed} alt="" />
          <Span>
            <a href="mailto:sayasir557@gmail.com">sayasir557@gmail.com</a>
          </Span>
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
    /* color: #b8c2a9; */
    font-family: 'Axiforma', sans-serif;
    color: #e8e8e8;
    opacity: 0.7;
  }
`;
const Heading1 = styled.h1`
  font-size: 60px;
  font-weight: 800;
  /* color: #b8c2a9; */
  font-family: 'Monument', sans-serif;
  letter-spacing: -4px;
  color: #e8e8e8;
  text-transform: uppercase;
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
  /* color: #b8c2a9; */
  color: #e8e8e8;
  opacity: 0.7;
  font-family: 'Axiforma', sans-serif;
  font-size: 18px;
  z-index: 10;
  @media (max-width: 550px) {
    font-size: 16px;
  }
  & a {
    text-decoration: none;
    color: #e8e8e8;
    cursor: pointer;
  }
  & a:hover {
    text-decoration: underline;
  }
`;
export default Footer;
