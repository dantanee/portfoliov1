import React from 'react';
import styled, { keyframes } from 'styled-components';
import IncentiveMockup from './assets/incentivemockup.svg';
import ArrowLeft from './assets/left-arrow.svg';
import InBaground from './assets/incentive-background.png';
import TarBaground from './assets/tarkin-background.svg';
import TarkinMockup from './assets/tarkin-mockup.svg';
import TrakaMockup from './assets/tracka-mockup.svg';
import NextIcon from './assets/nexticon.svg';
import BtcMockup from './assets/BtcMockup.svg';
import AdasheMockup from './assets/adashemockup.svg';
import GonaMockup from './assets/gonamock.svg';
// import { Parallax } from 'react-scroll-parallax';
// import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Works = () => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <WorksWrapper>
        <Heading2>SELECTED WORKS</Heading2>

        <Work>
          <BtcMockupWrapper>
            <img src={BtcMockup} alt="" />
          </BtcMockupWrapper>

          <TextSection style={{ right: '-10px' }}>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <h1>Easybit</h1>
              <p>
                Encouraging bitcoin adoption in Africa by allowing individuals
                easily gift bitcoin and also create campaigns(giveaway) on
                social media and reward winners in btc(SATS).
              </p>
            </div>
            <NavLink
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/easybit"
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

        <Work>
          <TextSection>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <h1>Difftraka</h1>
              <p>
                Helping to drive financial inclusion for women in northern
                Nigeria, by creating digital financial records for their
                traditional form of savings,borrowing and contribution(Adashe).
              </p>
            </div>
            <NavLink
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/difftraka"
            >
              <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                hover={hover}
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

          <IncentiveMockupWrapper>
            <img src={AdasheMockup} alt="" />
          </IncentiveMockupWrapper>
        </Work>

        <Work>
          <BtcMockupWrapper>
            <img src={IncentiveMockup} alt="" />
          </BtcMockupWrapper>

          <TextSection>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <h1>Incentive</h1>
              <p>
                Teaching children financial responsibilty by making them do
                tasks to earn rewards(points) and also save towards goals.
              </p>
            </div>
            <NavLink
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/incentive"
            >
              <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                hover={hover}
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
        <Work>
          <TextSection>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <h1>Gona</h1>
              <p>
                A desktop solution for a farm manager to see sales records,
                payment records,view profits summary and generally have detailed
                overview into how their business is doing. .
              </p>
            </div>
            <NavLink style={{ textDecoration: 'none', zIndex: '10' }} to="/">
              <Button
                style={{ border: 'none', marginLeft: '-30px', width: '350px' }}
              >
                <span>CASE STUDY COMING SOON</span>
                {/* {hover ? (
                  <img src={NextIcon} alt="" />
                ) : (
                  <img src={ArrowLeft} alt="" />
                )} */}
              </Button>
            </NavLink>
          </TextSection>

          <GonaMockUpWrapper>
            <img src={GonaMockup} alt="" />
          </GonaMockUpWrapper>
        </Work>

        {/* <TarkinWork>
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
        </TarkinWork> */}
        <TrakaWork>
          <TrakaMockupWrapper style={{ left: '-10px' }}>
            <img src={TrakaMockup} alt="" />
          </TrakaMockupWrapper>

          <TextSection>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
                transform: 'translateX(-100px)',
              }}
            >
              <h1>Tracka</h1>
              <p>
                An app that allows herders track their cattle and also help them
                locate grazing paths and waterside to feed and walk their
                animals.
              </p>
            </div>
            <NavLink
              style={{
                textDecoration: 'none',
                zIndex: '10',
                transform: 'translateX(-100px)',
              }}
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
          {/* <TextSection
            style={{
              position: 'relative',
              right: '100px',
              transform: 'translateX(-100px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <h1>Tracka</h1>
              <p>
                An app that allows herders track their cattle and also help them
                locate grazing paths and waterside to feed and walk their
                animals.
              </p>
            </div>
          
            <NavLink
              style={{ textDecoration: 'none', zIndex: '100' }}
              to="/incentive"
            >
              <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                hover={hover}
              >
                <span>VIEW CASE STUDY</span>
                {hover ? (
                  <img src={NextIcon} alt="" />
                ) : (
                  <img src={ArrowLeft} alt="" />
                )}
              </Button>
            </NavLink>
          </TextSection> */}
        </TrakaWork>
      </WorksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 64px;
`;
const Heading2 = styled.h1`
  /* color: #b8c2a9; */
  color: #e8e8e8;
  display: flex;
  justify-content: center;
  font-family: 'Monument', sans-serif;
  letter-spacing: -4px;
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
  margin-top: 100px;
  align-items: center;
  display: flex;
  /* height: 700px; */
  width: 100%;
  height: 100vh;
  gap: 32px;
  overflow: hidden;
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
    width: 600px;
    @media (max-width: 550px) {
      /* position: absolute;
      right: 64px; */
      /* width: 500px; */
    }
  }
`;
const IncentiveMockupWrapper = styled.div`
  position: relative;
  right: -300px;
  top: 112px;
  & img {
    width: 600px;
    @media (max-width: 550px) {
      /* position: absolute;
      right: 64px; */
      /* width: 500px; */
    }
  }
`;
const GonaMockUpWrapper = styled(IncentiveMockupWrapper)`
  top: 30px;
  right: -200px;
`;
const BtcMockupWrapper = styled(IncentiveMockupWrapper)`
  left: -100px;
`;
const TrakaMockupWrapper = styled(IncentiveMockupWrapper)`
  & img {
    position: relative;
    left: -150px;
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
  left: 100px;
  /* top: 120px; */
  @media (max-width: 550px) {
    width: 330px;
    align-items: center;
    gap: 48px;
  }
  & h1 {
    font-size: 48px;
    font-weight: 600;
    font-family: 'Monument', sans-serif;
    letter-spacing: -4px;
    text-transform: uppercase;
    /* color: #b8c2a9; */
    color: #e8e8e8;
    @media (max-width: 550px) {
      font-size: 32px;
      align-self: center;
    }
  }
  & p {
    font-size: 16px;
    /* color: #b8c2a9; */
    color: #e8e8e8;
    font-family: 'Axiforma', sans-serif;
    opacity: 0.7;
    line-height: 1.8;
    font-weight: 500;
    @media (max-width: 550px) {
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  height: 51px;
  width: 300px;
  padding: 16px 8px;
  /* color: #b8c2a9; */
  color: #e8e8e8;
  font-family: 'Monument', sans-serif;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #e8e8e8;
  text-transform: lowercase;

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;
export const NavLink = styled(Link)`
  width: 300px;
  & :hover {
    background: #e8e8e8;
    color: #010001;
  }
`;
// const AnimatedDiv = styled.div`
//   transition: transform 10s;
// `;
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const AnimatedDiv = styled.div`
  animation: ${slideIn} 2s;
`;

export default Works;
