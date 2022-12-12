import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.span`
  font-weight: 700;
  font-size: 60px;
`;

const animateGradient = keyframes`
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

const AnimatedText = (props) => (
  <Wrapper
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
  </Wrapper>
);
export default AnimatedText;
