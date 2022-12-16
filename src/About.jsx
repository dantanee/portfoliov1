import { React, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Link } from 'react-router-dom';
import Yasir from './assets/geepic.png';
import ArrowLeft from './assets/left-arrow.svg';
import NextIcon from './assets/nexticon.svg';
import ReactPlayer from 'react-player';

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <Header />
      <div
        style={{
          display: 'flex',
          gap: '80px',
          alignItems: 'center',
          marginTop: '64px',
        }}
      >
        <img src={Yasir} alt="yasir picture" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <Text>
            {' '}
            I am a product designer looking for a role in an exciting company. I
            focus on making beautiful,user-centered and accessible designs that
            users love to use and also meet business goals. I am comfortable
            using Figma and Adobe Xd for design and also Adobe After Effects for
            motion and interaction design. I can adapt to whatever tool is
            required. I am happy working remotely and have experience working in
            remote teams. When I’m not designing, you’ll find me watching
            documentaries or watching tech related videos. I love playing
            football and enjoy watching it too, Kindly checkout my works.
          </Text>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <span>VIEW WORKS</span>
              {hover ? (
                <img src={NextIcon} alt="" />
              ) : (
                <img src={ArrowLeft} alt="" />
              )}
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 144px;
  /* background-image: linear-gradient(180deg, #012e20 38%, #010101 100%, #010101); */
  background-color: #14262a;
`;
const Button = styled.button`
  display: flex;
  gap: 8px;
  height: 51px;
  width: 258px;
  background: ;
  color: #b8c2a9;
  font-family: 'Chakra Petch';
  cursor:pointer;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #b8c2a9;

  & span {
    font-size: 16px;
    font-weight: 500;
    text-
  }
  &:hover {
    background: #b8c2a9;
    color: #012e20;
  }
`;
const Text = styled.p`
  font-family: 'FreightText', sans-serif;
  font-size: 20px;
  font-weight: 400;
  max-width: 800px;
  margin-top: 24px;
  color: #b8c2a9;
`;
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
export default About;
