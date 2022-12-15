import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Header from './Header';
import Tarkin from './Tarkin';
import Footer from './Footer';
import Works from './Works';
import HeroBg from './assets/herobg.png';
import HomeHeader from './HomeHeader';

const Home = () => {
  return (
    <div>
      <AboveFold>
        <HeaderWrapper>
          <HomeHeader />
        </HeaderWrapper>
        <HeroWrapper>
          <Hero />
        </HeroWrapper>
      </AboveFold>
      <Below>
        <WorksWrapper>
          <Works />
        </WorksWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Below>
    </div>
  );
};

const HeroWrapper = styled.div`
  margin-top: 220px;
  @media (max-width: 550px) {
    margin-top: 96px;
  }
`;
const FooterWrapper = styled.div`
  margin-top: 200px;
  @media (max-width: 550px) {
    margin-top: 96px;
  }
`;
const AboveFold = styled.div`
  display: flex;
  height: 650px;
  /* background-image: linear-gradient(180deg, #012e20 38%, #010101 100%, #010101); */
  background-image: url(${HeroBg});
  background-size: cover;
  @media (max-width: 550px) {
    height: 400px;
  }
`;
const Below = styled.div`
  /* background-image: linear-gradient(#010101 1%, #092419 80%, #010101); */
  background-color: #14262a;
`;
const WorksWrapper = styled.div``;
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  /* height: 200px; */
  /* margin: auto; */
`;

export default Home;
