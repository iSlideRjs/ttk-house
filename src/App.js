import React from 'react';
import Ttk from './ttk.jpg';
import { Header } from './components/Header';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <img src={Ttk} alt="" width="300px" height="200px" />
      </Container>
    </div>
  );
}

export default App;
