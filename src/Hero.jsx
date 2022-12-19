import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAnimation, motion, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Arrowdown from './assets/arrow-down-line.svg';

const Hero = () => {
  // const text = 'I design innovative solutions for real-world problems.';

  // const ctrls = useAnimation();

  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     ctrls.start('visible');
  //   }
  //   if (!inView) {
  //     ctrls.start('hidden');
  //   }
  // }, [ctrls, inView]);

  // const characterAnimation = {
  //   hidden: {
  //     opacity: 0,
  //     y: `0.25em`,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: `0em`,
  //     transition: {
  //       duration: 1,
  //       ease: [0.2, 0.65, 0.3, 0.9],
  //     },
  //   },
  // };
  const divRef = useRef(null);
  const animation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    // Check if the div is in view
    const divTop = divRef.current?.offsetTop;
    const divBottom = divTop + divRef.current?.offsetHeight;
    const viewportTop = scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    if (divBottom > viewportTop && divTop < viewportBottom) {
      // Start the animation when the div is in view
      animation.start({ y: 0, opacity: 1 });
    }
  }, [animation, scrollY]);
  return (
    <MainWrapper>
      {/* <Wrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        /> */}
      <Wrapper animate={animation}>
        <span
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#9e8d8d',
            marginBottom: '32px',
            fontFamily: 'Monument, sans-serif',
          }}
        >
          Hello, I'm Yasir,
        </span>
        {/* {text.split('').map((character, index) => (
          <Heading
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={characterAnimation}
          >
            {character}
          </Heading>
        ))}
        <h1 style={{ fontSize: '48px', color: 'white' }}> Hello</h1> */}
        <Heading>
          I create designs that solve user needs and meet business goals.
        </Heading>

        <Scroll>
          <a>scroll down</a>
          <img src={Arrowdown} alt="" />
        </Scroll>
      </Wrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  padding: 0 128px;
  position: relative;
  @media (max-width: 550px) {
    padding: 0 32px;
  }
`;

const Blob = styled.img`
  position: absolute;
  top: 30%;
  right: 5%;
`;
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const TextSection = styled.div``;
const Heading = styled.h1`
  font-weight: 800;
  font-size: 64px;
  margin-top: 48px;
  /* color: #b8c2a9; */
  /* color: #fffde4; */
  /* color: #667f6a; */
  color: #e8e8e8;

  max-width: 1200px;
  /* letter-spacing: -2px; */
  line-height: 80px;
  transform: translateY(-80px);
  font-family: 'Monument', sans-serif;
  letter-spacing: -4px;

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
  transform: translateY(-70px);
  @media (max-width: 550px) {
    margin-top: 24px;
  }
  & a {
    font-size: 12px;
    text-decoration: none;
    font-weight: 500;
    font-family: 'Monument', sans-serif;
    color: #e8e8e8;
    opacity: 0.6;
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

export const AnimatedCharacter = styled.span`
  /* background: linear-gradient(to right, #b8c2a9, #f3e96a, #8be78b); */
  /* background: linear-gradient(to right, #ebb21c, #05eba2, #fffde4); */

  background: linear-gradient(to right, #6bc5f8, #cf59e6);
  animation: ${AnimateGradient} 2s linear infinite;
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export default Hero;
{
  /* <span style={{ fontSize: '18px', fontWeight: '600', color: '#9e8d8d' }}>
          Hello, I'm Yasir
        </span> */
}
{
  /* <Blob src={Blackblob} alt="" /> */
}
{
  /* <Text>Creating innovative solutions for real-world problems.</Text> */
}

{
  /* <AnimatedCharacter></AnimatedCharacter>  */
}
