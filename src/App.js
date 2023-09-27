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
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  // let darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // useEffect(() => {
  //   if (darkThemeMediaQuery.matches) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
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
