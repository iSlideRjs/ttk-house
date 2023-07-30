import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header({ changeTheme, theme }) {
  return (
    <Navbar className="head bg-warning bg-gradient">
      <Container>
        <Navbar.Brand className="ms-2 logo" href="#home">
          TTK House
        </Navbar.Brand>
        <Nav className="ms-auto me-2 nav-header">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#features">Ответы</Nav.Link>
          <Nav.Link href="#pricing">Контакты</Nav.Link>
          <Button variant={theme} onClick={changeTheme}>
            {theme}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Header };
