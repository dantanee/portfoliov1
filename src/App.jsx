import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Route, Routes } from 'react-router-dom';
// import './App.css';

import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import styled from 'styled-components';
import TrakaCaseStudy from './Cowtrack';
import IncentiveCaseStudy from './Incentive';
import TarkinCaseStudy from './Tarkin';
import Home from './Home';
import About from './About';
import DiffCaseStudy from './Difftraka';
import EasyBitCaseStudy from './Easybit';
import TestCase from './SomeCase';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/difftraka" element={<DiffCaseStudy />} />
          <Route path="/incentive" element={<IncentiveCaseStudy />} />
          <Route path="/cowtraka" element={<TrakaCaseStudy />} />
          <Route path="/tarkin" element={<TarkinCaseStudy />} />
          <Route path="/easybit" element={<EasyBitCaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/testcase" element={<TestCase />} />
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
