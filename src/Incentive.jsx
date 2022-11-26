import React from 'react';
import styled from 'styled-components';
import IncentiveBackground from './assets/incentive-landing.svg';
import RightHand from './assets/right-hand.svg';
import LeftHand from './assets/left-hand.svg';
import Header from './Header';
import ProjectBrief from './assets/project-brief.svg';
import MyRole from './assets/my-role.svg';
import ParentFlow from './assets/parentflow.svg';
import ChildFlow from './assets/childflow.svg';
import Wireframes from './assets/wireframes.svg';
import ShortArrow from './assets/shortarrow.svg';
import IncentiveStyle from './assets/incentive-styleguide.svg';
// import ProximaSoft from './assets/Proxima-Soft.svg';
import LongArrow from './assets/longarrow.svg';
import Icons from './assets/icons.svg';
import Styleguide from './assets/styleguide.svg';
import ChildOnboard from './assets/childonboarding.png';
import ParentOnboard from './assets/parent-onboard.png';
import ParentOnboard3 from './assets/Onboarding3.svg';
import CreatePoint from './assets/creatpoint.png';
import ParentHome from './assets/parenthome.png';
import CreateReview from './assets/createandreview.png';
import ChildHomepage from './assets/childhomepage.png';
import CreateGoal from './assets/creategoal.png';
import Transfer from './assets/transfers.png';
import NextIcon from './assets/next.svg';
import { Link } from 'react-router-dom';

const IncentiveCaseStudy = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <AboveFold>
        <RightImage src={RightHand} alt="" />
        <LeftImage src={LeftHand} alt="" />
      </AboveFold>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading>PROJECT BRIEF AND GOALS</Heading>
            <Text>
              Create an application for parents looking for a way to teach their
              kids about personal and financial responsibility through the
              connection of work and money. It should be a usable and simplistic
              app that allows parents to create profile for their kids and track
              chores.Once child completes a task they are able to receive money
              through a point system that can be applied to a specific savings
              goal that is displayed through this application. The application
              should give option of creating “savings pockets”(or goals) once
              tasks are completed and points are earned.
            </Text>
          </div>
          <Goal>
            <h3>GOAL</h3>
            <ul>
              <li>
                Parents should be able to create tasks,assign points to the
                tasks and reward kids when they complete the tasks.
              </li>
              <li>
                Children should be able to create savings goals, fund their
                goals and withdraw money when goal is complete;
              </li>
            </ul>
          </Goal>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          {/* <img
            src={MyRole}
            alt=""
            style={{ position: 'relative', top: '40px' }}
          /> */}
          <div>
            <Heading>MY ROLE</Heading>
            <Text>
              This was a design school project and was used to test how we can
              think through (decode) design briefs and come up with a solution.
              The deliverables were userflow and information architecture,
              wireframes,styleguide and high-fidelity prototypes.
            </Text>
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading>USERFLOW</Heading>
            <Text>
              As an important part of the design and also the deliverables,
              after understanding the brief and defining the goals, the next
              thing I did was to create a userflow to guide the design. This is
              a simplified version of it that outlines some of the features I
              think are needed.
            </Text>
          </div>
          <div>
            <img src={ParentFlow} alt="" />
            <img src={ChildFlow} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading>WIREFRAMES</Heading>
            <Text>
              After doing the userflow, went ahead and did some wireframes which
              was part of the deliverables and also lay the foundation for the
              high-fidelity designs. Again, this is the wireframe of some of the
              pages not all of them.
            </Text>
          </div>
          <div>
            <img src={Wireframes} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading>STYLEGUIDE</Heading>
            <Text>
              To keep the visual elements consistent and appealing,we were asked
              to develop a styleguide that consists of typography, color and
              icons.
            </Text>
          </div>
          <div>
            <img src={Styleguide} alt="" />
          </div>
        </ContentWrapper>
      </TextSection>
      <TextSection>
        <ContentWrapper>
          <div>
            <Heading>HIGH-FIDELITY</Heading>
            <Text>
              After establishing my visual direction and getting clarity on how
              the design should come together, I started with the high-fidelity
              designs.
            </Text>
          </div>
          <div>
            <Heading2 style={{ marginTop: '32px' }}>
              CHILD ONBOARDING SCREENS
            </Heading2>
            <Text style={{ marginTop: '6px' }}>
              I walk the child through a brief introduction of what the app is
              about and then after that they input their pin which their parent
              already created for them during profile creation.Made the
              onboarding a bit colorful for the children.
            </Text>
            <Screen src={ChildOnboard} alt="" />
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2>PARENT ONBOARDING SCREENS</Heading2>
            <Text>
              The parent's onboarding is similar to the children's just the copy
              is kind of different,indicating the things that they could do.
            </Text>
            <div>
              <Screen src={ParentOnboard} alt="" />
            </div>
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2>CREATING PROFILE AND POINTS</Heading2>
            <Text>
              One of the key aspects of the application is to allow for point
              creation in which parent can choose to eiher go with the default
              or create custom.
            </Text>
            <div>
              <Screen src={CreatePoint} alt="" />
            </div>
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2>PARENTS HOMEPAGE</Heading2>
            <Text>
              Its important to make the homepage as simple as possible for both
              parents and children so as to increase the chances of them
              accomplishing their goals.So careful consideration was placed on
              simplicity and decluttering.For the parents the goal is around
              creating tasks and assigning points,loading wallets, creating kids
              profile and reviewing tasks.
            </Text>
            <div>
              <Screen style={{ marginTop: '32px' }} src={ParentHome} alt="" />
            </div>
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2>CREATE TASKS AND TASK REVIEW</Heading2>
            <Text>
              One of the key aspects of the application is to allow for point
              creation in which parent can choose to either go with the default
              or create custom.
            </Text>
            <div>
              <Screen style={{ marginTop: '32px' }} src={CreateReview} alt="" />
            </div>
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2>CHILD HOMEPAGE</Heading2>
            <Text>
              The child app also needed to be as simple and straightforward
              without distractions.The main goal for the child is to be able to
              create saving goals,see the progress of the goal and also transfer
              money to each of the goals.
            </Text>
            <div>
              <Screen
                style={{ marginTop: '32px' }}
                src={ChildHomepage}
                alt=""
              />
            </div>
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2>CHILD CREATE GOAL</Heading2>
            <Text>
              Child can create goal and when the goal is fulfilled they get to
              cashout.
            </Text>
            <div>
              <Screen style={{ marginTop: '32px' }} src={CreateGoal} alt="" />
            </div>
          </div>
          <div style={{ marginTop: '64px' }}>
            <Heading2>FUND GOAL</Heading2>
            <Text>
              The child gets to choose and transfer any amount from their
              balance to any specific goal.
            </Text>
            <div>
              <Screen style={{ marginTop: '32px' }} src={Transfer} alt="" />
            </div>
          </div>
        </ContentWrapper>
      </TextSection>
      <Ending>
        <Heading>LEARNINGS</Heading>
        <Text>
          This was a fun project to work on,had to do a lot of thinking and
          interations considering it was my first project in Design School and I
          was given a brief to work with.I learnt alot on how to keep user goals
          front-and-center while designing.I spent some time iterating over
          ideas that i thought were cool only to later realise were unnecessary
          and not aligned to the project goals On the visual side,I learnt how
          typography,color and icons should be consistent with brand goals.
        </Text>
        <Next>
          <Link
            style={{
              textDecoration: 'none',
              fontFamily: 'FreightText',
              fontSize: '20px',
              fontWeight: '800',
              color: '#121212',
              zIndex: 10,
            }}
            to="/tarkin"
          >
            Next Project{' '}
          </Link>{' '}
          <img src={NextIcon} />
        </Next>
      </Ending>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f6f7f7;
  color: #021d31;
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
  display: flex;
  position: relative;
  height: 670px;
  background-image: url(${IncentiveBackground});
  overflow: hidden;
`;
const RightImage = styled.img`
  position: absolute;
  right: 200px;
  top: 200px;
`;
const LeftImage = styled(RightImage)`
  left: 200px;
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
  max-width: 800px;
  margin-top: 24px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const TextSection = styled.div`
  display: flex;
  padding: 128px 200px 0px;
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
// const Styleguide = styled(Goal)`
//   padding: 64px;
//   & h2 {
//     font-family: 'ProximaSoft';
//     font-weight: 800;
//     font-size: 48px;
//   }
// `;
const Explainer = styled.div`
  padding: 32px 24px;
  background-color: '#f6f7f7';
  border: 1px solid #b2cbcf;
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
const Ending = styled.div`
  position: relative;
  padding: 128px 200px;
`;
const Next = styled.span`
  display: flex;
  position: absolute;
  right: 100px;
  gap: 16px;
  & a {
    font-family: 'FreightText';
    font-size: 20px;
    font-weight: bold;
  }
`;
export default IncentiveCaseStudy;
