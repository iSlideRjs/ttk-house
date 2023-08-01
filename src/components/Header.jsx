import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ changeTheme, theme }) {
  return (
    <Navbar className="head bg-warning bg-gradient">
      <Container>
        <Navbar.Brand className="ms-2 logo" href="#home">
          TTK House
        </Navbar.Brand>
        <Nav className="ms-auto me-2 nav-header">
          <Nav.Link href="#home">Главная</Nav.Link>{' '}
        </Nav>
        <label id="switch" className="switch">
          <input type="checkbox" onChange={changeTheme} id="slider" />
          <span class="slider round"></span>
        </label>
      </Container>
    </Navbar>
  );
}

export { Header };
