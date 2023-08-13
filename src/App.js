import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <div>
      <Container>
        <Header theme={theme} changeTheme={changeTheme} />
        <Slider />
        <Body />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
