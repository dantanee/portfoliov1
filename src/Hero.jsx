// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// import Arrowdown from './assets/arrow-down-filled.svg';

// const Hero = () => {
//   return (
//     <MainWrapper>
//       <Wrapper>
//         {/* <span
//           style={{
//             position: 'absolute',
//             fontWeight: 600,
//             fontSize: '24px',
//             color: '#B8C2A9',
//             opacity: 0.7,
//             // marginBottom: '64px',
//           }}
//         > */}{' '}
//         <AnimatedText
//           gradientColors={['#ff0000', '#00ff00', '#0000ff']}
//           animationDuration={5}
//         >
//           {' '}
//           Hello, I'm Yasir{' '}
//         </AnimatedText>
//         {/* </span> */}
//         <Text>
//           {' '}
//           I{' '}
//           {/* <AnimatedText
//             gradientColors={['#ff0000', '#00ff00', '#0000ff']}
//             animationDuration={5}
//           > */}
//           design solutions
//           {/* </AnimatedText>{' '} */}
//           that solve real problems.
//         </Text>
//         {/* <ImageWrapper>
//           <Image src={Yas} alt="" />
//         </ImageWrapper> */}
//       </Wrapper>
//       <Scroll>
//         <a href="">view works</a>
//         <img src={Arrowdown} alt="" />
//       </Scroll>
//     </MainWrapper>
//   );
// };

// const AnimatedText = (props) => (
//   <GradientWrapper
//     style={{
//       background: `linear-gradient(to right, ${props.gradientColors.join(
//         ', '
//       )})`,
//       backgroundClip: 'text',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       animation: `${animateGradient} ${props.animationDuration}s linear infinite`,
//     }}
//   >
//     {props.children}
//   </GradientWrapper>
// );
// const MainWrapper = styled.div`
//   padding: 0 128px;
//   @media (max-width: 550px) {
//     padding: 0 32px;
//   }
// `;
// const Wrapper = styled.div`
//   display: flex;
// `;
// const TextSection = styled.div``;
// const Text = styled.p`
//   font-weight: 700;
//   font-size: 60px;
//   margin-top: 48px;
//   color: #b8c2a9;
//   max-width: 990px;
//   letter-spacing: -3px;
//   line-height: 80px;

//   @media (max-width: 550px) {
//     font-size: 32px;
//     line-height: 1.5;
//     letter-spacing: 0;
//   }
// `;
// const Span = styled.span`
//   background-color: #1fb87b;
//   font-family: 'Chakra Petch', sans-serif;
//   font-weight: 700;
//   /* background-image: linear-gradient(45deg, #2af7a5, #1fb87b); */
//   background-size: 100%;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -moz-background-clip: text;
//   -moz-text-fill-color: transparent;
// `;
// const ImageWrapper = styled.div`
//   margin-top: 32px;
//   width: 520px;
// `;
// const Image = styled.img`
//   /* width: 500px;
//   height: 500px; */
// `;
// const Scroll = styled.div`
//   display: flex;
//   margin-top: 64px;
//   gap: 8px;
//   @media (max-width: 550px) {
//     margin-top: 24px;
//   }
//   & a {
//     font-size: 18px;
//     text-decoration: none;
//     font-weight: 600;
//     color: #9e8d8d;
//   }
// `;
// const GradientWrapper = styled.span`
//   font-weight: 700;
//   font-size: 60px;
// `;

// const animateGradient = keyfram
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// `;
// export default Hero;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeroBg from './assets/herobg.svg';
import Arrowdown from './assets/arrow-down-filled.svg';

const AnimatedText = (props) => (
  <span
    style={{
      background: `linear-gradient(to right, ${props.gradientColors.join(
        ', '
      )})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: `${animateGradient} ${props.animationDuration}s linear infinite`,
    }}
  >
    {props.children}
  </span>
);

const Hero = () => {
  return (
    <MainWrapper>
      <Wrapper>
        {/* <span style={{ fontSize: '18px', fontWeight: '600', color: '#9e8d8d' }}>
          Hello, I'm Yasir
        </span> */}

        <Text>
          Creating <AnimatedSpan> innovative solutions</AnimatedSpan> for
          real-world problems.
        </Text>
      </Wrapper>
      <Scroll>
        <a href="">view my works</a>
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
  flex-direction: column;
`;
const TextSection = styled.div``;
const Text = styled.p`
  font-weight: 700;
  font-size: 60px;
  margin-top: 48px;
  /* color: #b8c2a9; */
  color: #fffde4;
  max-width: 990px;
  letter-spacing: -3px;
  line-height: 80px;
  transform: translateY(-40px);

  @media (max-width: 550px) {
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: 0;
  }
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
    /* color: #9e8d8d; */
    color: #fffde4;
    opacity: 0.8;
  }
`;
const AnimateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AnimatedSpan = styled.span`
  /* background: linear-gradient(to right, #b8c2a9, #f3e96a, #8be78b); */
  background: linear-gradient(to right, #ebb21c, #05eba2, #fffde4);
  animation: ${AnimateGradient} 8s linear infinite;
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export default Hero;
