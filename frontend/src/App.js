import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Manifesto from './components/Manifesto';
import Farms from './components/Farms';
import About from './components/About';
import Intro from './components/Intro';

const Container = styled.div`
  margin-top: 100vh;
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 1.0);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('/assets/cow_hero2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const HeroText = styled.h1`
  position: fixed;
  top: 40%;
  right: 10%;
  transform: translateY(-50%);
  font-size: 7rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  z-index: 0;
  font-family: 'Amatic SC', cursive;
  opacity: ${props => props.opacity};
  transition: opacity 0.3s ease;
`;

const QuoteText = styled.p`
  position: fixed;
  top: 60%;
  right: 10%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-style: italic;
  max-width: 500px;
  text-align: right;
  z-index: 0;
  opacity: ${props => props.opacity};
  transition: opacity 0.3s ease;
`;

const HeroButtonContainer = styled.div`
  position: fixed;
  top: 75%;
  right: 10%;
  transform: translateY(-50%);
  display: flex;
  gap: 1rem;
  z-index: 0;
  opacity: ${props => props.opacity};
  transition: opacity 0.3s ease;
`;

const HeroButton = styled.button`
  font-family: 'Quicksand', sans-serif;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  ${props => props.primary ? `
    background-color: #27AE60;
    color: white;
  ` : `
    background-color: rgba(255, 255, 255, 0.9);
    color: #2C3E50;
  `}
`;

function MainContent() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const scrollToManifesto = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeStart = 100;
      const fadeEnd = 400;
      
      if (scrollPosition <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrollPosition >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        setScrollOpacity(1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderImage />
      <HeroText opacity={scrollOpacity}>Mendel's Farm</HeroText>
      <QuoteText opacity={scrollOpacity}>"The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings." - Masanobu Fukuoka</QuoteText>
      <HeroButtonContainer opacity={scrollOpacity}>
        <HeroButton as={Link} to="/farms">Find Local Farms</HeroButton>
        <HeroButton primary onClick={scrollToManifesto}>Learn More ↓</HeroButton>
      </HeroButtonContainer>
      <Container id="body">
        <Intro />
        <About />
        <Manifesto />
      </Container>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
