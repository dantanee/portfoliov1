import { React, useState } from 'react';
import logo from './assets/logonew.svg';
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
        <img src={logo} alt="logo" />
      </Link>
      <NavItems>
        <Link style={{ textDecoration: 'none' }} to="/">
          <NavItem>works</NavItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/about">
          <NavItem>about</NavItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <NavItem>contact</NavItem>
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
  @media (max-width: 550px) {
    display: none;
  }
`;
const NavItems = styled.nav`
  display: flex;
  gap: 32px;
`;
const NavItem = styled.a`
  /* font-family: 'Syne', sans-serif;
  font-weight: 500;
  color: #b8c2a9; */
  font-family: 'Monument', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #e8e8e8;
  &:hover {
    color: #e8e8e8;
    opacity: 0.5;
  }
`;
export default Header;
