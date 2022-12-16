import { React, useState } from 'react';
import logo from './assets/newlogo.svg';
import LogoBlack from './assets/logoblack.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: 'none' }}>
        {colorChange ? (
          <img src={LogoBlack} alt="logo" />
        ) : (
          <img src={LogoBlack} alt="" />
        )}
      </Link>
      <NavItems>
        <Link style={{ textDecoration: 'none' }} to="/">
          <NavItem
            style={colorChange ? { color: '#121212' } : { color: '#121212' }}
          >
            works
          </NavItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/about">
          <NavItem
            style={colorChange ? { color: '#121212' } : { color: '#121212' }}
          >
            about
          </NavItem>
        </Link>
        <Link style={{ textDecoration: 'none' }}>
          <NavItem
            style={colorChange ? { color: '#121212' } : { color: '#121212' }}
          >
            contact
          </NavItem>
        </Link>
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
  background: hsl(0deg 0% 20% / 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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
  color: #e8e8e8;
`;
export default Header;
