import { React, useState, useEffect } from 'react';
import logo from './assets/newlogo.svg';
import LogoBlack from './assets/logoblack.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderStyle({
          background: 'hsl(0deg 0% 20% / 0.1)',
          backdropFilter: 'blur(12px)',
          // -webkit-backdrop-filter: blur(12px);
          color: '#121212',
        });
      } else {
        setHeaderStyle({});
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Wrapper style={headerStyle}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={LogoBlack} alt="logo" />
      </Link>
      <NavItems>
        <Link style={{ textDecoration: 'none' }} to="/">
          <NavItem>works</NavItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/about">
          <NavItem>about</NavItem>
        </Link>
        {/* <Link style={{ textDecoration: 'none' }}>
          <NavItem
            style={colorChange ? { color: '#121212' } : { color: '#121212' }}
          >
            contact
          </NavItem>
        </Link> */}
      </NavItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 128px 0;

  /* -webkit-backdrop-filter: blur(12px); */
`;
const NavItems = styled.nav`
  display: flex;
  gap: 32px;
`;
const NavItem = styled.a`
  /* font-family: 'Syne', sans-serif; */
  font-family: 'Monument', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #121212;
`;
export default Header;
