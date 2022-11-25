import React from 'react';
import styled from 'styled-components';
import Yas from './assets/pic.png';
import Arrowdown from './assets/arrow-down-filled.svg';

const Hero = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <span
          style={{
            position: 'absolute',
            fontWeight: 600,
            fontSize: '24px',
            color: '#B8C2A9',
            opacity: 0.7,
            // marginBottom: '64px',
          }}
        >
          {' '}
          Hello, I'm Yasir{' '}
        </span>
        <Text>
          I <Span>design products</Span> that solve user needs and meet business
          goals.
        </Text>

        {/* <ImageWrapper>
          <Image src={Yas} alt="" />
        </ImageWrapper> */}
      </Wrapper>
      <Scroll>
        <a href="">view works</a>
        <img src={Arrowdown} alt="" />
      </Scroll>
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  padding: 0 128px;
  @media (max-width: 550px) {
    padding: 0 32px;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;
const TextSection = styled.div``;
const Text = styled.p`
  font-weight: 700;
  font-size: 60px;
  margin-top: 48px;
  color: #b8c2a9;
  max-width: 990px;
  letter-spacing: -3px;
  line-height: 80px;

  @media (max-width: 550px) {
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: 0;
  }
`;
const Span = styled.span`
  background-color: #1fb87b;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 700;
  /* background-image: linear-gradient(45deg, #2af7a5, #1fb87b); */
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
const ImageWrapper = styled.div`
  margin-top: 32px;
  width: 520px;
`;
const Image = styled.img`
  /* width: 500px;
  height: 500px; */
`;
const Scroll = styled.div`
  display: flex;
  margin-top: 64px;
  gap: 8px;
  @media (max-width: 550px) {
    margin-top: 24px;
  }
  & a {
    font-size: 18px;
    text-decoration: none;
    font-weight: 600;
    color: #9e8d8d;
  }
`;
export default Hero;
