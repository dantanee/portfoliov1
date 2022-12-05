import React from 'react';
import styled from 'styled-components';
import Women from './assets/women.svg';

const Difftraka = () => {
  return (
    <Wrapper>
      <Hero>
        {/* <Bar /> */}
        <HeroHeading>DIFFTRAKA</HeroHeading>
        <HeroImage src={Women} alt="" />
      </Hero>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Hero = styled.div`
  position: relative;
  display: flex;
  height: 700px;
`;
const HeroHeading = styled(Heading)`
  font-size: 56px;
`;
const Heading = styled.h1`
  font-family: 'DIN2014', sans-serif;
  font-size: 48px;
  font-weight: 800;
`;
const Bar = styled.div`
  height: 30px;
  width: 60px;
  background: #374af0;
  position: absolute;
`;
const HeroImage = styled.img``;

export default Difftraka;
