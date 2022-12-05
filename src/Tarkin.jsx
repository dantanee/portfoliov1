import { React, useState } from 'react';
import styled from 'styled-components';
import TarkinBackground from './assets/Tarkin-homepage.svg';
import TarkinHero from './assets/tarkinhero.svg';
import Leaf1 from './assets/leaf1.svg';
import Header from './Header';
import Startup from './assets/startup1.svg';
import Leaf2 from './assets/leaf2.svg';
import Leaf3 from './assets/leaf3.svg';
import Leaf4 from './assets/leaf4.png';
import Approach from './assets/approach.svg';
import StyleGuide from './assets/styleguidetarkin.svg';
import LandingPage from './assets/tarkinlanding.png';
import AboutUs from './assets/Aboutus.png';
import MobileView from './assets/mobile.png';
import NextIcon from './assets/arrow-right-black.svg';
import PrevIcon from './assets/previous.svg';
import Congrats from './assets/congrats.png';
import Leaf6 from './assets/leaf6.svg';
import Completed from './assets/completed.svg';
import NextUp from './assets/arrow-right-black-slanted.svg';
import PreviousUp from './assets/arrow-left-white.svg';
import PreviousIcon from './assets/arrow-left-black.svg';
import { Link } from 'react-router-dom';

const TarkinCaseStudy = () => {
  const [hover, setHover] = useState(false);
  const [prevHover, setPrevHover] = useState(false);
  return (
    <Wrapper>
      <AboveFold>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <HeroImageWrapper>
          <HeroImage src={TarkinHero} alt="" />
        </HeroImageWrapper>
      </AboveFold>
      <TextSection>
        <Illustration src={Startup} alt="" />
        <ContentWrapper>
          <div>
            <span>
              <img src={Leaf1} alt="" />
            </span>
            <Heading>OVERVIEW AND GOALS</Heading>
            <Text>
              Many farmers face the challenge of post-harvest loss. They face
              situations where they don’t have access to good storage facilities
              and as a result are either forced to sell their crops at lower
              price or risk spoilage.
            </Text>
          </div>
          <Goal>
            <h3>GOAL</h3>
            <Text>
              The goal was to create a responsive website for an agri-tech
              startup that is solving that problem. The website should create
              awareness of what the company is about and what it stands for. In
              that way create engagement and have a place that potential
              investors can look to understand just what the company is about.
              This should help them get recognition as an emerging company in
              the Agri-tech industry.
            </Text>
          </Goal>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <span>
              <img src={Leaf2} alt="" />
            </span>
            <Heading>MY ROLE</Heading>
            <Text>
              I lead the design of the website from start to finish. From
              strategy,wireframes, and prototypes Was also in charge of hand-off
              to the developer. I conducted a few meetings with the statkeholder
              to get enough insights on direction etc.
            </Text>
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <Illustration src={Approach} alt="" style={{ top: '50px' }} />
        <ContentWrapper>
          <div>
            <span>
              <img src={Leaf3} alt="" />
            </span>
            <Heading>APPROACH</Heading>
            <Text>
              Kicked-off the project by having a meeting with the CEO and tried
              to establish the brand and creative direction. Some of the
              questions asked was “what adjectives define your company and how
              will you like to be perceived”. After deliberations we settled on
              a traditional and friendly brand and tone because that showcases
              the agricultural roots of the product and its customer first
              approach.
            </Text>
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <span>
              <img src={Leaf4} alt="" />
            </span>
            <Heading>STYLEGUIDE</Heading>
            <Text>
              It was crucial to establish a clear set of rules and principles to
              assist me in creating an intuitive experience for our users. These
              includes typography,color, and UI Elements.
            </Text>
          </div>
          <div>
            <img src={StyleGuide} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <span>
              <img src={Leaf4} alt="" />
            </span>
            <Heading>HIGH FIDELITY DESIGNS</Heading>
            <Text>
              After defining the styleguide and creative direction, I went ahead
              and started making the design.The business goal and the user need
              were front-and-center in guiding my decision for the structure of
              the page.Using quality imagery and adequate whitespacing to make
              elements stand out and also using bold and large headings to make
              it clear to the user what each section is about were some of the
              things i placed emphasis on.
            </Text>
          </div>
          <div>
            <img src={LandingPage} alt="" />
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2 style={{ marginLeft: '58px' }}>MOBILE VIEW</Heading2>
            <div>
              <img src={MobileView} alt="" />
            </div>
          </div>
        </ContentWrapper>
      </TextSection>

      <TextSection>
        <Illustration src={Completed} alt="" style={{ top: '100px' }} />
        <ContentWrapper>
          <div>
            <span>
              <img src={Leaf6} alt="" />
            </span>
            <Heading>OUTCOMES</Heading>
            <Text>
              Kicked-off the project by having a meeting with the CEO and tried
              to establish the brand and creative direction. Some of the
              questions asked was “what adjectives define your company and how
              will you like to be perceived”. After deliberations we settled on
              a traditional and friendly brand and tone because that showcases
              the agricultural roots of the product and its customer first
              approach.
            </Text>
          </div>
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
           
            <Previous>
              <img src={PrevIcon} />
              <Link
                style={{
                  textDecoration: 'none',
                  fontFamily: 'FreightText',
                  fontSize: '20px',
                  fontWeight: '800',
                  color: '#121212',
                  zIndex: '10',
                }}
                to="/incentive"
              >
                Previous Project{' '}
              </Link>{' '}
            </Previous>
          </div> */}
          <div style={{ display: 'flex' }}>
            <Next
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/cowtraka"
            >
              <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <span>NEXT PROJECT</span>
                {hover ? (
                  //
                  // ) : (
                  //
                  <img src={NextUp} alt="" />
                ) : (
                  <img src={NextIcon} alt="" />
                )}
              </Button>
            </Next>
            <Previous
              style={{ textDecoration: 'none', zIndex: '10' }}
              to="/incentive"
            >
              <Button
                onMouseEnter={() => setPrevHover(true)}
                onMouseLeave={() => setPrevHover(false)}
              >
                {hover ? (
                  //
                  // ) : (
                  //
                  <img src={PreviousUp} alt="" />
                ) : (
                  <img src={PreviousIcon} alt="" />
                )}
                <span>PREVIOUS PROJECT</span>
              </Button>
            </Previous>
          </div>
        </ContentWrapper>
      </TextSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f6f7f7;
  color: #021d31;
  padding-bottom: 128px;
`;
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
const AboveFold = styled.div`
  position: relative;

  height: 850px;
  background-image: url(${TarkinBackground});
  overflow: hidden;
`;
const HeroImage = styled.img``;
const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const TextSection = styled.div`
  display: flex;
  padding: 128px 200px 0px;
  position: relative;
`;
const Heading = styled.h1`
  font-family: 'DIN2014', sans-serif;
  font-size: 48px;
  font-weight: 800px;
`;
const Text = styled.p`
  font-family: 'FreightText', sans-serif;
  font-size: 20px;
  font-weight: 400;
  max-width: 600px;
  margin-top: 24px;
`;
const Goal = styled.div`
  padding: 32px;
  background-color: #d7ffe4;
  border: 1px solid #b2cbcf;
  border-radius: 6px;
  font-family: 'FreightText';
  & h3 {
    font-family: 'DIN2014';
    font-size: 32px;
    margin-bottom: 16px;
  }
`;
const Illustration = styled.img`
  position: absolute;
  top: 230px;

  right: 50px;
`;
const Heading2 = styled.h2`
  font-family: 'DIN2014';
  font-size: 32px;
`;
const Ending = styled.div`
  position: relative;
  padding: 128px 200px;
`;
// const Next = styled.span`
//   display: flex;
//   position: absolute;
//   bottom: -70px;
//   right: 10%;
//   gap: 16px;

//   & a {
//     font-size: 20px;
//     font-weight: 400;
//     text-transform: uppercase;
//   }
// `;
const LinkImg = styled.div`
  &:hover {
    color: white;
  }
`;

const Button = styled.button`
  display: flex;
  gap: 8px;
  height: 51px;
  width: 258px;
  color: #121212;
  font-family: 'DIN2014';
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #121212;

  & span {
    font-size: 20px;
    font-weight: 500;
  }
`;
const Next = styled(Link)`
  align-self: flex-end;
  position: absolute;
  right: 10%;
  top: 510px;
  & :hover {
    background: #121212;
    color: #ffffff;
  }
`;

const Previous = styled(Link)`
  align-self: flex-start;
  position: absolute;
  left: 15%;
  top: 510px;
  & :hover {
    background: #121212;
    color: #ffffff;
  }
`;

export default TarkinCaseStudy;
