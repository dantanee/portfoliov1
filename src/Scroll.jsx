import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

const AnimatedDiv = styled.div`
  transition: transform 2s;
`;

const MyAnimatedComponent = () => {
  return (
    <Parallax
      className="custom-class"
      offsetYMax={20}
      offsetYMin={-20}
      slowerScrollRate
      tag="figure"
    >
      <AnimatedDiv>This is my animated component</AnimatedDiv>
    </Parallax>
  );
};

export default MyAnimatedComponent;
