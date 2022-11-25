import React from 'react';
import styled from 'styled-components';
import Mockup from './assets/incentive mockup.png';
import ArrowLeft from './assets/left-arrow.svg';
import InBaground from './assets/incentive-background.png';
import TarBaground from './assets/tarkin-background.svg';
import TarkinMockup from './assets/tarkin-mockup.svg';
import TrakaMockup from './assets/tracka-mockup.svg';
import NextIcon from './assets/nexticon.svg';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Works = () => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <WorksWrapper>
        <Heading2>SOME WORKS</Heading2>
        <Work>
          <MockupWrapper>
            <img src={Mockup} alt="" />
          </MockupWrapper>
          <TextSection>
            <div
              style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}
            >
              <h1>INCENTIVE</h1>
              <p>
                An app for both parents and children. Main goal is to teach
                children to be financially healthy,by making them do small tasks
                to earn rewards and also save towards goals.
              </p>
            </div>
            <NavLink
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/incentive"
            >
              <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <span>VIEW CASE STUDY</span>
                {hover ? (
                  <img src={NextIcon} alt="" />
                ) : (
                  <img src={ArrowLeft} alt="" />
                )}
              </Button>
            </NavLink>
          </TextSection>
        </Work>
        <TarkinWork>
          <TextSection>
            <div
              style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}
            >
              <h1>TARKIN</h1>
              <p>
                A website that offers services for farmers of any scale by
                providing them post havest assistance like access to storage
                facilities, market and logistics.
              </p>
            </div>
            <NavLink
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/tarkin"
            >
              <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <span>VIEW CASE STUDY</span>
                {hover ? (
                  <img src={NextIcon} alt="" />
                ) : (
                  <img src={ArrowLeft} alt="" />
                )}
              </Button>
            </NavLink>
          </TextSection>
          <MockupWrapper>
            <img src={TarkinMockup} alt="" />
          </MockupWrapper>
        </TarkinWork>
        <TrakaWork>
          <TrakaWrapper>
            <img src={TrakaMockup} alt="" />
          </TrakaWrapper>
          <TextSection>
            <div
              style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}
            >
              <h1>TRACKA</h1>
              <p>
                An app that allows headers track their cattle and also help them
                locate grazing paths and waterside to feed and walk their
                animals.
              </p>
            </div>
            <NavLink
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/cowtraka"
            >
              <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <span>VIEW CASE STUDY</span>
                {hover ? (
                  <img src={NextIcon} alt="" />
                ) : (
                  <img src={ArrowLeft} alt="" />
                )}
              </Button>
            </NavLink>
          </TextSection>
        </TrakaWork>
      </WorksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 64px;
`;
const Heading2 = styled.h1`
  color: #b8c2a9;
  display: flex;
  justify-content: center;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 60px;
  font-weight: 700;
  @media (max-width: 550px) {
    font-size: 32px;
    text-align: center;
  }
`;

const WorksWrapper = styled.div``;
const Work = styled.div`
  position: relative;
  margin-top: 48px;
  align-items: center;
  display: flex;
  /* height: 700px; */
  width: 100%;
  gap: 32px;
  @media (max-width: 550px) {
    flex-direction: column;
    padding-left: 32px;
    padding-right: 32px;
    align-items: center;
  }
  /* padding-top: 96px; */
`;
const TarkinWork = styled(Work)`
  /* background-image: url(${TarBaground}); */
  /* background-position: left; */
  padding: 72px;
  @media (max-width: 550px) {
    flex-direction: column-reverse;
    padding: 48px 32px;
  }
`;
const MockupWrapper = styled.div`
  /* position: relative; */
  align-self: center;
  & img {
    width: 800px;
    @media (max-width: 550px) {
      /* position: absolute;
      right: 64px; */
      /* width: 500px; */
    }
  }
`;
const TrakaWrapper = styled.div``;
const TrakaWork = styled(Work)`
  padding: 72px;
  gap: 88px;
  @media (max-width: 550px) {
    gap: 32px;
    padding: 48px 32px;
  }
`;
const TextSection = styled.div`
  display: flex;
  /* flex: 1; */
  width: 430px;
  flex-direction: column;
  gap: 64px;
  position: relative;
  /* top: 120px; */
  @media (max-width: 550px) {
    width: 330px;
    align-items: center;
    gap: 48px;
  }
  & h1 {
    font-size: 48px;
    font-weight: 600;
    font-family: 'Chakra Petch', sans-serif;
    color: #b8c2a9;
    @media (max-width: 550px) {
      font-size: 32px;
      align-self: center;
    }
  }
  & p {
    font-size: 16px;
    color: #b8c2a9;
    font-weight: 400;
    @media (max-width: 550px) {
      text-align: center;
    }
  }
`;

const Button = styled.button`
  display: flex;
  gap: 8px;
  height: 51px;
  width: 258px;
  color: #b8c2a9;
  font-family: 'Chakra Petch';
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #b8c2a9;

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;
const NavLink = styled(Link)`
  & :hover {
    background: #b8c2a9;
    color: #012e20;
  }
`;
export default Works;
