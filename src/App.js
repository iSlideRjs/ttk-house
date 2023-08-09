import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Body } from './components/Body';
import Container from 'react-bootstrap/Container';

function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App" data-bs-theme={theme}>
      <Container>
        <Header theme={theme} changeTheme={changeTheme} />
        <Slider />
        <Body />
      </Container>
    </div>
  );
}

export default App;
