import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Body } from './components/Body';
import { Contacts } from './components/Contacts';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import { Footer } from './components/Footer';

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
        <Contacts theme={theme} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
