import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BtcHero from './assets/btchero.png';
const TestCase = () => {
  return (
    <div>
      <AboveFold>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </AboveFold>
      <Section>
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: '0',
            zIndex: '4',
          }}
        >
          <iframe
            src="https://www.loom.com/embed/57a6e4d604064148b56f4cc66b74c868"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div>
      </Section>
    </div>
  );
};
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
`;
const AboveFold = styled.div`
  background-image: url(${BtcHero});
  position: relative;
  overflow: hidden;
  height: 700px;
  background-position: center left;
`;
const Section = styled.section`
  padding: 100px 200px 50px;
`;
export default TestCase;
