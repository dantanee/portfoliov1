import { React, useState } from 'react';
import styled from 'styled-components';
import TrakaBackground from './assets/cowtraka.svg';
import TrakaHero from './assets/trakahero.svg';
import Header from './Header';
import Roles from './assets/roles.svg';
import DesignThinking from './assets/designthinking.png';
import Sticker from './assets/sticker.svg';
import ProblemStatement from './assets/problemstatement.svg';
import Solution from './assets/rename.png';
import TrakaFlow from './assets/trakaflow.svg';
import TrakaHome from './assets/trakahome.png';
import Tracking from './assets/trackframe.png';
import TrackResult from './assets/trackresults.png';
import ToLocation from './assets/tolacation.png';
import NextIcon from './assets/next.svg';
import PrevIcon from './assets/previous.svg';
import Outcomes from './assets/outcome.png';
import PreviousUp from './assets/arrow-left-white.svg';
import PreviousIcon from './assets/arrow-left-black.svg';
import { Link } from 'react-router-dom';

const TrakaCaseStudy = () => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <AboveFold>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <HeroImaWrapper>
          <HeroImage src={TrakaHero} alt="" />
        </HeroImaWrapper>
      </AboveFold>
      <TextSection>
        <div>
          <Heading>BACKGROUND</Heading>
          <Text>
            Many farmers face the challenge of post-harvest loss. They face
            situations where they don’t have access to good storage facilities
            and as a result are either forced to sell their crops at lower price
            or risk spoilage.
          </Text>
        </div>
      </TextSection>
      <TextSection>
        <Illustration src={Roles} alt="" />
        <ContentWrapper>
          <div>
            <Heading>MY ROLE</Heading>
            <Text>
              This was the final project at Colab design school. We were divided
              into groups . We were 4 in our group and I lead the UX Research
              and Visual Design from start to finish.
            </Text>

            <div style={{ marginTop: '32px' }}>
              <Heading2> MY TEAMMATES </Heading2>
              <Team>Sharon Damisa</Team>
              <Team>Ebun Anyila</Team>
              <Team>Shefiu Shittu </Team>
            </div>
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <Illustration src={DesignThinking} alt="" />
        <ContentWrapper>
          <div>
            <Heading>DESIGN PROCESS</Heading>
            <Text>
              We leveraged the design thinking framework to kickoff our design
              process. We started our journey by visiting a cattle house (Ruga)
              and interviewed some herdsmen. Based on the answers we get from
              this questions and more we were able to come up with our Problem
              Statement.
            </Text>
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <Illustration src={Sticker} alt="" />
        <ContentWrapper>
          <div>
            <Heading>DESIGN PROCESS</Heading>
            <Text>
              We leveraged the design thinking framework to kickoff our design
              process. We started our journey by visiting a cattle house (Ruga)
              and interviewed some herdsmen. Based on the answers we get from
              this questions and more we were able to come up with our Problem
              Statement.
            </Text>
            <img style={{ marginTop: '27px' }} src={ProblemStatement} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <Illustration style={{ top: '50px' }} src={Solution} alt="" />
        <ContentWrapper>
          <div>
            <Heading>SOLUTION</Heading>
            <Text>
              Shanu which translates to cattle in Hausa language,is an app that
              allows herdsmen track their cattle in realtime using the app.This
              tracking is done by connecting a tracker worn on the cow to our
              app.Aside from tracking of cattle,Shanu also allows herdsmen to be
              able to find the best grazing routes and water paths for their
              cattle.Our app uses gps to determine this routes.
            </Text>
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading>USERFLOW</Heading>
            <Text>
              We then went ahead and did a userflow to guide our design based on
              the features we agreed upon. NB This is a shorter version of it.
            </Text>
          </div>
          <div>
            <img src={TrakaFlow} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading>HIGH FIDELITY DESIGNS</Heading>
            <Text>
              Simplicity and Usability was our watch word while working on the
              app.Tried as much as we can to make the app as simple as possible
              considering the audience we are building for. The goal was for
              them to find and do what they want to do easily.
            </Text>
          </div>
          <div>
            <Screen src={TrakaHome} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading2> TRACKING </Heading2>
            <Text>
              Tracking is one of the most important features of the app and its
              important it is simple to understand and wouldn’t be difficult to
              explain to them how to use it.
            </Text>
          </div>
          <div>
            <Screen src={Tracking} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading2> SEARCH AND RESULTS </Heading2>
            <Text>
              when the user performs an action like lookin for a safe grazing
              path,or water bodies we go through a search and show them the
              safest and closest.
            </Text>
          </div>
          <div>
            <Screen src={TrackResult} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading2> LOCATION </Heading2>
            <Text>
              When you click on “Go” to go to the suggested destination this
              page guides the user throughout the journey .
            </Text>
          </div>
          <div>
            <Screen src={ToLocation} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <Illustration src={Outcomes} alt="" />
        <ContentWrapper>
          <div>
            <Heading>OUTCOMES</Heading>
            <Text>
              This was another project I was proud of working on. It was the
              first time I went out to do real user-research and meet people
              that will potentially use what I am designing. Another thing that
              made this a learning experience aside interviewing real users was
              how we came back with my teammates and started ideation based on
              that, hearing others opinion on direction and learning how to
              colaborate and listen to teammates is something valuable i took
              with me.
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
                to="/tarkin"
              >
                Previous Project{' '}
              </Link>{' '}
            </Previous>
          </div> */}
          <Previous
            style={{ textDecoration: 'none', zIndex: '10' }}
            to="/tarkin"
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
  background-image: url(${TrakaBackground});
  overflow: hidden;
`;
const HeroImage = styled.img``;
const HeroImaWrapper = styled.div`
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

const Text = styled.p`
  font-family: 'FreightText', sans-serif;
  font-size: 20px;
  font-weight: 400;
  max-width: 600px;
  margin-top: 24px;
`;
const Team = styled(Text)`
  margin-top: 12px;
`;
const Heading = styled.h1`
  font-family: 'DIN2014', sans-serif;
  font-size: 48px;
  font-weight: 800px;
`;
const Illustration = styled.img`
  position: absolute;
  top: 140px;
  right: 50px;
`;
const Heading2 = styled.h2`
  font-family: 'DIN2014';
  font-size: 32px;
`;
const Screen = styled.img`
  display: block;

  margin-left: -38px;
  /* box-shadow: 0px 6px 52px #cacbcb; */
`;
// const Next = styled.span`
//   display: flex;
//   position: absolute;
//   bottom: -70px;
//   right: 10%;
//   gap: 16px;
//   & a {
//     font-family: 'FreightText';
//     font-size: 20px;
//     font-weight: bold;
//   }
// `;
// const Previous = styled(Next)`
//   left: 10%;
// `;
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
const Previous = styled(Link)`
  align-self: flex-start;
  position: absolute;
  left: 15%;
  top: 490px;
  & :hover {
    background: #121212;
    color: #ffffff;
  }
`;
export default TrakaCaseStudy;
